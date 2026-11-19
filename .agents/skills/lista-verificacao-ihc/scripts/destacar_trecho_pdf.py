#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
destacar_trecho_pdf.py — Busca trechos nos PDFs de referência de IHC e gera recortes
de página legíveis com marcação amarela (estilo marca-texto) sobre o trecho exato.

Suporta:
  1. PDFs digitais com camada de texto (via PyMuPDF word-level matching, tolerante a
     ligaturas como 'ﬁ'/'ﬂ', hifenização de fim de linha e variações de acentuação).
  2. PDFs escaneados sem camada de texto (fallback automático via RapidOCR).
  3. Páginas duplas / spreads horizontais (ex.: Vianna et al., 2012; Santa-Rosa & Moraes),
     recortando automaticamente apenas a metade (esquerda ou direita) onde está o trecho.
  4. Destaque manual por caixa normalizada (--bbox x0,y0,x1,y1 em 0..1) quando necessário
     marcar figuras, diagramas ou quadros gráficos.

Exemplos de uso (executar com C:\\Python314\\python.exe):
  # 1) Buscar em qual página do PDF aparece um termo ou frase:
  C:\\Python314\\python.exe destacar_trecho_pdf.py --pdf "Simone_Barbosa" --buscar "elenco de personas"

  # 2) Gerar recorte destacado de um PDF digital:
  C:\\Python314\\python.exe destacar_trecho_pdf.py ^
      --pdf "Simone_Barbosa" ^
      --pagina 184 ^
      --trecho "um elenco pequeno de personas" ^
      --saida "docs/assets/img/referencias/item01_personas.png"

  # 3) Destacar múltiplos trechos na mesma página (repetir --trecho):
  C:\\Python314\\python.exe destacar_trecho_pdf.py ^
      --pdf "Livro_Design_Thinking" ^
      --pagina 69 ^
      --trecho "Uma representação visual de uma história através de quadros estáticos" ^
      --saida "docs/assets/img/referencias/item01_storyboard.png"
"""

from __future__ import annotations

import argparse
import difflib
import io
import json
import os
import re
import sys
import unicodedata
from pathlib import Path
from typing import List, Optional, Sequence, Tuple

import pymupdf
from PIL import Image, ImageChops, ImageDraw, ImageOps


DEFAULT_CONTEXTO_DIR = Path(__file__).resolve().parents[4] / "contexto"


def normalize_for_match(text: str) -> str:
    """Normaliza ligaturas (NFKC), remove acentos/pontuação e converte para minúsculas."""
    text = unicodedata.normalize("NFKC", text)
    # Remove soft hyphens e caracteres de controle
    text = text.replace("\xad", "").replace("\x83", "")
    # Decompõe acentos (NFD) e remove marcas combinantes
    text = unicodedata.normalize("NFD", text)
    text = "".join(ch for ch in text if unicodedata.category(ch) != "Mn")
    text = text.lower()
    # Mantém apenas alfanuméricos separados por espaço simples
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return text.strip()


def normalize_alnum_stream(text: str) -> str:
    """Converte texto em fluxo contínuo apenas de [a-z0-9] (imune a espaços espúrios de ligaturas e hifens)."""
    return re.sub(r"[^a-z0-9]+", "", normalize_for_match(text))


def resolve_pdf_path(pdf_arg: str, contexto_dir: Path) -> Path:
    """Resolve caminho exato, relativo ou busca parcial normalizada (NFC/NFD) em contexto/."""
    candidate = Path(pdf_arg)
    if candidate.is_file():
        return candidate.resolve()

    if contexto_dir.is_dir():
        direct = contexto_dir / pdf_arg
        if direct.is_file():
            return direct.resolve()

        target_norm = normalize_for_match(pdf_arg)
        matches: List[Path] = []
        for entry in sorted(contexto_dir.iterdir()):
            if entry.is_file() and entry.suffix.lower() == ".pdf":
                entry_norm = normalize_for_match(entry.stem)
                if target_norm in entry_norm or entry_norm in target_norm:
                    matches.append(entry)
        if len(matches) == 1:
            return matches[0].resolve()
        if len(matches) > 1:
            # Prefere correspondência mais curta / específica
            matches.sort(key=lambda p: len(p.name))
            return matches[0].resolve()

    raise FileNotFoundError(
        f"Arquivo PDF não encontrado para '{pdf_arg}'. Verifique o caminho ou os arquivos em '{contexto_dir}'."
    )


def detect_printed_header(page: pymupdf.Page) -> str:
    """Extrai as primeiras linhas da página para identificar cabeçalho / página impressa."""
    lines = [ln.strip() for ln in page.get_text("text").splitlines() if ln.strip()]
    if not lines:
        return "(página sem camada de texto — escaneada)"
    return " | ".join(lines[:2])[:140]


def search_in_pdf(pdf_path: Path, query: str, max_hits: int = 30) -> int:
    """Busca um trecho ao longo de todas as páginas de um PDF digital."""
    doc = pymupdf.open(str(pdf_path))
    q_stream = normalize_alnum_stream(query)
    if not q_stream:
        print("Erro: termo de busca vazio.", file=sys.stderr)
        return 1

    print(f"PDF: {pdf_path.name} ({len(doc)} páginas)")
    hits = 0
    empty_pages = 0
    for idx in range(len(doc)):
        page = doc[idx]
        raw = page.get_text("text")
        if not raw.strip():
            empty_pages += 1
            continue
        p_stream = normalize_alnum_stream(raw)
        if q_stream in p_stream:
            hits += 1
            header = detect_printed_header(page)
            # Monta snippet legível
            clean_raw = re.sub(r"\s+", " ", unicodedata.normalize("NFKC", raw))
            norm_words = normalize_for_match(clean_raw)
            q_words = normalize_for_match(query)
            pos = norm_words.find(q_words)
            snippet = clean_raw[:220]
            if pos >= 0 and len(norm_words) > 0:
                approx = int((pos / max(1, len(norm_words))) * len(clean_raw))
                start = max(0, approx - 90)
                end = min(len(clean_raw), approx + len(query) + 130)
                snippet = clean_raw[start:end]
            print(f"  [Página PDF {idx + 1:3d}] Cabeçalho: {header}")
            print(f"      Trecho: ...{snippet}...")
            if hits >= max_hits:
                print(f"  (Exibindo os primeiros {max_hits} resultados)")
                break

    if hits == 0:
        if empty_pages == len(doc):
            print(
                "  Aviso: este PDF é escaneado (sem camada de texto embutida). "
                "Consulte o mapeamento de páginas em references/acervo-contexto.md "
                "e use --pagina <N> diretamente (o destaque usará OCR automático)."
            )
        else:
            print(f"  Nenhuma ocorrência encontrada para: '{query}'.")
    return 0


def merge_word_boxes_by_line(
    words_with_meta: Sequence[Tuple[float, float, float, float, str, int, int, int]]
) -> List[pymupdf.Rect]:
    """Agrupa caixas de palavras da mesma linha visual em faixas retangulares limpas."""
    if not words_with_meta:
        return []

    grouped: List[List[pymupdf.Rect]] = []
    current_group: List[pymupdf.Rect] = []
    last_key: Optional[Tuple[int, int]] = None
    last_yc: Optional[float] = None

    for x0, y0, x1, y1, _w, bno, lno, _wno in words_with_meta:
        rect = pymupdf.Rect(x0, y0, x1, y1)
        yc = 0.5 * (y0 + y1)
        h = max(1.0, y1 - y0)
        same_line = False
        if last_key is not None and (bno, lno) == last_key:
            same_line = True
        elif last_yc is not None and abs(yc - last_yc) <= 0.55 * h:
            # Mesma linha visual, mas apenas se não pular para outra coluna distante
            if current_group and abs(x0 - current_group[-1].x1) < 60:
                same_line = True

        if same_line and current_group:
            current_group.append(rect)
        else:
            if current_group:
                grouped.append(current_group)
            current_group = [rect]
        last_key = (bno, lno)
        last_yc = yc

    if current_group:
        grouped.append(current_group)

    merged: List[pymupdf.Rect] = []
    for grp in grouped:
        u = grp[0]
        for r in grp[1:]:
            u = u | r
        # Pequeno respiro estético de marca-texto
        merged.append(pymupdf.Rect(u.x0 - 1.5, u.y0 - 1.0, u.x1 + 1.5, u.y1 + 1.0))
    return merged


def match_excerpt_digital(page: pymupdf.Page, excerpt: str) -> List[pymupdf.Rect]:
    """
    Localiza um trecho em página digital mapeando fluxo alfanumérico contínuo de volta
    às palavras exatas da página (suporta 'identiﬁ cação', 'aná-\\nlise', quebras de linha).
    """
    words = page.get_text("words")
    if not words:
        return []

    # Ordena em ordem natural de leitura por bloco, linha, palavra
    words_sorted = sorted(words, key=lambda w: (w[5], w[6], w[7]))

    stream_chars: List[str] = []
    char_to_word_idx: List[int] = []

    for idx, w in enumerate(words_sorted):
        w_text = w[4]
        # Remove hífen de quebra de linha no fim da palavra se houver continuação
        if w_text.endswith("-") and len(w_text) > 1:
            w_text = w_text[:-1]
        alnum = normalize_alnum_stream(w_text)
        for ch in alnum:
            stream_chars.append(ch)
            char_to_word_idx.append(idx)

    full_stream = "".join(stream_chars)
    target_stream = normalize_alnum_stream(excerpt)
    if not target_stream or not full_stream:
        return []

    pos = full_stream.find(target_stream)
    if pos == -1:
        # Tenta correspondência aproximada (caso haja pequena variação tipográfica)
        matcher = difflib.SequenceMatcher(None, full_stream, target_stream, autojunk=False)
        match = matcher.find_longest_match(0, len(full_stream), 0, len(target_stream))
        if match.size >= max(12, int(0.75 * len(target_stream))):
            # Expande proporcionalmente para cobrir o trecho aproximado
            start_char = max(0, match.a - match.b)
            end_char = min(len(full_stream), start_char + len(target_stream))
        else:
            return []
    else:
        start_char = pos
        end_char = pos + len(target_stream)

    first_w = char_to_word_idx[start_char]
    last_w = char_to_word_idx[end_char - 1]
    matched_words = words_sorted[first_w : last_w + 1]
    return merge_word_boxes_by_line(matched_words)


def match_excerpt_ocr(page: pymupdf.Page, excerpt: str, ocr_dpi: int = 200) -> List[pymupdf.Rect]:
    """Localiza trecho em página escaneada usando RapidOCR e converte para coordenadas PyMuPDF."""
    try:
        from rapidocr_onnxruntime import RapidOCR
    except ImportError as exc:
        raise RuntimeError(
            "Página escaneada detectada, mas 'rapidocr_onnxruntime' não está instalado neste Python. "
            "Execute com C:\\Python314\\python.exe."
        ) from exc

    pix = page.get_pixmap(dpi=ocr_dpi)
    scale_x = page.rect.width / pix.width
    scale_y = page.rect.height / pix.height

    ocr = RapidOCR()
    results, _ = ocr(pix.tobytes("png"))
    if not results:
        return []

    # Cada item: [ [[x0,y0],[x1,y1],[x2,y2],[x3,y3]], texto, score ]
    ocr_lines: List[Tuple[pymupdf.Rect, str, str]] = []
    for box, text, _score in results:
        xs = [pt[0] * scale_x for pt in box]
        ys = [pt[1] * scale_y for pt in box]
        rect = pymupdf.Rect(min(xs), min(ys), max(xs), max(ys))
        alnum = normalize_alnum_stream(text)
        if alnum:
            ocr_lines.append((rect, text, alnum))

    # Ordena linhas OCR de cima para baixo (com tolerância de linha) e esquerda para direita
    ocr_lines.sort(key=lambda item: (round(item[0].y0 / 8.0), item[0].x0))

    stream_chars: List[str] = []
    char_to_line_idx: List[int] = []
    for idx, (_rect, _txt, alnum) in enumerate(ocr_lines):
        for ch in alnum:
            stream_chars.append(ch)
            char_to_line_idx.append(idx)

    full_stream = "".join(stream_chars)
    target_stream = normalize_alnum_stream(excerpt)
    if not target_stream or not full_stream:
        return []

    pos = full_stream.find(target_stream)
    if pos != -1:
        start_c = pos
        end_c = pos + len(target_stream)
    else:
        # OCR pode trocar 1-2 letras (ex.: 'ç'->'g', 'l'->'1'); busca janela de maior similaridade
        win_len = len(target_stream)
        best_ratio = 0.0
        best_span = (0, 0)
        step = max(1, win_len // 12)
        for i in range(0, max(1, len(full_stream) - int(win_len * 0.7)), step):
            candidate = full_stream[i : i + int(win_len * 1.15)]
            ratio = difflib.SequenceMatcher(None, candidate, target_stream, autojunk=False).ratio()
            if ratio > best_ratio:
                best_ratio = ratio
                best_span = (i, min(len(full_stream), i + win_len))
        # Refina ao redor da melhor janela com passo 1
        lo = max(0, best_span[0] - step * 2)
        hi = min(len(full_stream), best_span[0] + step * 2)
        for i in range(lo, max(lo + 1, hi)):
            for w in (int(win_len * 0.92), win_len, int(win_len * 1.08)):
                if i + w <= len(full_stream):
                    candidate = full_stream[i : i + w]
                    ratio = difflib.SequenceMatcher(
                        None, candidate, target_stream, autojunk=False
                    ).ratio()
                    if ratio > best_ratio:
                        best_ratio = ratio
                        best_span = (i, i + w)

        if best_ratio < 0.72:
            return []
        start_c, end_c = best_span

    first_ln = char_to_line_idx[start_c]
    last_ln = char_to_line_idx[end_c - 1]

    # Ajusta horizontalmente a primeira e última linha proporcionalmente à posição no stream da linha
    rects: List[pymupdf.Rect] = []
    for ln_idx in range(first_ln, last_ln + 1):
        base_rect = ocr_lines[ln_idx][0]
        ln_positions = [i for i, li in enumerate(char_to_line_idx) if li == ln_idx]
        if not ln_positions:
            continue
        ln_start = ln_positions[0]
        ln_end = ln_positions[-1] + 1
        ln_len = max(1, ln_end - ln_start)

        x0 = base_rect.x0
        x1 = base_rect.x1
        if ln_idx == first_ln and start_c > ln_start:
            frac0 = (start_c - ln_start) / ln_len
            x0 = base_rect.x0 + frac0 * base_rect.width * 0.92
        if ln_idx == last_ln and end_c < ln_end:
            frac1 = (end_c - ln_start) / ln_len
            x1 = base_rect.x0 + min(1.0, frac1 * 1.06) * base_rect.width

        rects.append(pymupdf.Rect(x0 - 2.0, base_rect.y0 - 1.5, x1 + 2.0, base_rect.y1 + 1.5))

    return rects


def read_page_text(page: pymupdf.Page, page_num: int, ocr_dpi: int = 180) -> int:
    """Exibe o texto completo de uma página específica (camada digital ou OCR se escaneada)."""
    raw = page.get_text("text")
    if raw.strip():
        clean = unicodedata.normalize("NFKC", raw)
        print(f"=== Página PDF {page_num} (texto digital) ===")
        print(clean)
        return 0

    from rapidocr_onnxruntime import RapidOCR

    pix = page.get_pixmap(dpi=ocr_dpi)
    ocr = RapidOCR()
    results, _ = ocr(pix.tobytes("png"))
    print(f"=== Página PDF {page_num} (OCR RapidOCR) ===")
    if not results:
        print("(Nenhum texto reconhecido via OCR)")
        return 0
    results_sorted = sorted(results, key=lambda r: (round(r[0][0][1] / 14.0), r[0][0][0]))
    for _box, text, _score in results_sorted:
        print(text)
    return 0


def compute_crop_rect(
    page_rect: pymupdf.Rect,
    highlight_rects: Sequence[pymupdf.Rect],
    lado: str,
    margem_v: float,
    incluir_cabecalho: bool,
    incluir_rodape: bool,
    pagina_inteira: bool,
) -> pymupdf.Rect:
    """Calcula a janela de recorte (tratando spreads duplos e mantendo contexto suficiente)."""
    mid_x = page_rect.x0 + page_rect.width / 2.0
    is_spread = page_rect.width > page_rect.height * 1.12

    # Define limites horizontais (página simples vs. metade de spread duplo)
    hx0 = page_rect.x0
    hx1 = page_rect.x1
    if lado == "esq":
        hx1 = mid_x
    elif lado == "dir":
        hx0 = mid_x
    elif lado == "auto" and is_spread and highlight_rects:
        all_left = all(r.x1 <= mid_x + 12 for r in highlight_rects)
        all_right = all(r.x0 >= mid_x - 12 for r in highlight_rects)
        if all_left:
            hx1 = mid_x
        elif all_right:
            hx0 = mid_x

    if pagina_inteira or not highlight_rects:
        return pymupdf.Rect(hx0, page_rect.y0, hx1, page_rect.y1)

    union_r = highlight_rects[0]
    for r in highlight_rects[1:]:
        union_r = union_r | r

    cy0 = max(page_rect.y0, union_r.y0 - margem_v)
    cy1 = min(page_rect.y1, union_r.y1 + margem_v)

    # Garante altura mínima de contexto (pelo menos 34% da altura da página) para provar proveniência
    min_h = page_rect.height * 0.34
    if (cy1 - cy0) < min_h:
        extra = (min_h - (cy1 - cy0)) / 2.0
        cy0 = max(page_rect.y0, cy0 - extra)
        cy1 = min(page_rect.y1, cy1 + extra)

    # Se o trecho estiver na metade superior da página ou --incluir-cabecalho for pedido,
    # estende até o topo para capturar número de página e cabeçalho corrente da obra.
    if incluir_cabecalho or cy0 <= page_rect.y0 + page_rect.height * 0.24:
        cy0 = page_rect.y0

    # Se --incluir-rodape for pedido (ex.: livros com numeração no rodapé como Vianna et al.),
    # estende até a borda inferior da página.
    if incluir_rodape or cy1 >= page_rect.y1 - page_rect.height * 0.16:
        cy1 = page_rect.y1

    return pymupdf.Rect(hx0, cy0, hx1, cy1)


def render_highlighted_crop(
    page: pymupdf.Page,
    crop_rect: pymupdf.Rect,
    highlight_rects: Sequence[pymupdf.Rect],
    dpi: int = 220,
) -> Image.Image:
    """
    Renderiza o recorte em alta resolução e aplica marca-texto amarelo com fusão 'multiply',
    mantendo o texto preto 100% nítido sobre o fundo amarelo (sem lavar o contraste).
    """
    pix = page.get_pixmap(clip=crop_rect, dpi=dpi, alpha=False)
    base_img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")

    scale_x = base_img.width / crop_rect.width
    scale_y = base_img.height / crop_rect.height

    # Camada branca onde pintamos retângulos amarelos suaves (#FFF176 / RGB 255, 241, 118)
    hl_layer = Image.new("RGB", base_img.size, (255, 255, 255))
    draw = ImageDraw.Draw(hl_layer)

    for r in highlight_rects:
        # Intersecta com o crop_rect
        ir = r & crop_rect
        if ir.is_empty:
            continue
        px0 = (ir.x0 - crop_rect.x0) * scale_x
        py0 = (ir.y0 - crop_rect.y0) * scale_y
        px1 = (ir.x1 - crop_rect.x0) * scale_x
        py1 = (ir.y1 - crop_rect.y0) * scale_y
        draw.rounded_rectangle(
            [px0, py0, px1, py1],
            radius=4,
            fill=(255, 241, 118),
            outline=(245, 198, 35),
            width=1,
        )

    # Multiply preserva o preto puro das letras (0 * 241 = 0) e colore o papel branco de amarelo!
    blended = ImageChops.multiply(base_img, hl_layer)
    # Adiciona borda sutil cinza para acabamento limpo no MkDocs e em PDFs
    bordered = ImageOps.expand(blended, border=1, fill=(210, 214, 220))
    return bordered


def parse_norm_bbox(bbox_str: str, ref_rect: pymupdf.Rect) -> pymupdf.Rect:
    parts = [float(x.strip()) for x in bbox_str.split(",")]
    if len(parts) != 4 or not all(0.0 <= v <= 1.0 for v in parts):
        raise ValueError(f"--bbox inválido '{bbox_str}'. Use x0,y0,x1,y1 com valores entre 0.0 e 1.0.")
    x0, y0, x1, y1 = parts
    return pymupdf.Rect(
        ref_rect.x0 + x0 * ref_rect.width,
        ref_rect.y0 + y0 * ref_rect.height,
        ref_rect.x0 + x1 * ref_rect.width,
        ref_rect.y0 + y1 * ref_rect.height,
    )


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Busca trechos e gera recortes de páginas de livros de IHC com destaque amarelo."
    )
    parser.add_argument(
        "--pdf",
        required=True,
        help="Nome parcial ou caminho do PDF (ex.: 'Simone_Barbosa', 'Livro_Design_Thinking', 'cap 8').",
    )
    parser.add_argument(
        "--contexto-dir",
        default=str(DEFAULT_CONTEXTO_DIR),
        help=f"Pasta onde ficam os PDFs de referência (padrão: {DEFAULT_CONTEXTO_DIR}).",
    )
    parser.add_argument(
        "--buscar",
        help="Modo busca: procura o termo/frase em todo o PDF e lista as páginas correspondentes.",
    )
    parser.add_argument(
        "--ler-pagina",
        type=int,
        help="Modo leitura: imprime todo o texto (digital ou OCR) de uma página específica (base 1).",
    )
    parser.add_argument(
        "--pagina",
        type=int,
        help="Número da página no PDF (base 1) para gerar o recorte destacado.",
    )
    parser.add_argument(
        "--trecho",
        action="append",
        default=[],
        help="Trecho exato a destacar em amarelo (pode repetir --trecho para múltiplos destaques).",
    )
    parser.add_argument(
        "--bbox",
        action="append",
        default=[],
        help="Caixa manual normalizada x0,y0,x1,y1 (0..1) na página (ou meia-página se --lado esq/dir).",
    )
    parser.add_argument(
        "--saida",
        help="Caminho do arquivo PNG de saída (ex.: docs/assets/img/referencias/item01.png).",
    )
    parser.add_argument(
        "--lado",
        choices=["auto", "esq", "dir", "ambos"],
        default="auto",
        help="Para PDFs em página dupla/spread: recortar metade esquerda, direita, auto ou ambos.",
    )
    parser.add_argument(
        "--margem-v",
        type=float,
        default=95.0,
        help="Margem vertical de contexto acima e abaixo do destaque em pontos PDF (padrão: 95).",
    )
    parser.add_argument(
        "--incluir-cabecalho",
        action="store_true",
        help="Estende o recorte até o topo da página para incluir número da página e cabeçalho da obra.",
    )
    parser.add_argument(
        "--incluir-rodape",
        action="store_true",
        help="Estende o recorte até a base da página para incluir numeração impressa no rodapé.",
    )
    parser.add_argument(
        "--pagina-inteira",
        action="store_true",
        help="Renderiza a página inteira (ou meia-página em spreads) com o trecho destacado.",
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=220,
        help="Resolução de renderização em DPI (padrão: 220).",
    )

    args = parser.parse_args()
    pdf_path = resolve_pdf_path(args.pdf, Path(args.contexto_dir))

    if args.buscar:
        return search_in_pdf(pdf_path, args.buscar)

    if args.ler_pagina is not None:
        doc = pymupdf.open(str(pdf_path))
        if not (1 <= args.ler_pagina <= len(doc)):
            print(f"Erro: --ler-pagina {args.ler_pagina} fora do intervalo 1..{len(doc)}.", file=sys.stderr)
            return 1
        return read_page_text(doc[args.ler_pagina - 1], args.ler_pagina)

    if args.pagina is None or not args.saida:
        parser.error("Para gerar um recorte, informe --pagina <N>, --saida <arquivo.png> e ao menos um --trecho (ou --bbox).")

    if not args.trecho and not args.bbox:
        parser.error("Informe ao menos um --trecho ou --bbox para destacar.")

    doc = pymupdf.open(str(pdf_path))
    if not (1 <= args.pagina <= len(doc)):
        print(f"Erro: --pagina {args.pagina} fora do intervalo 1..{len(doc)}.", file=sys.stderr)
        return 1

    page = doc[args.pagina - 1]
    has_digital_text = bool(page.get_text("words"))
    method_used = "digital_words" if has_digital_text else "rapidocr"

    all_highlights: List[pymupdf.Rect] = []
    unmatched: List[str] = []

    for trecho in args.trecho:
        if has_digital_text:
            rects = match_excerpt_digital(page, trecho)
        else:
            rects = match_excerpt_ocr(page, trecho)

        if not rects and has_digital_text:
            # Fallback para OCR caso a camada de texto esteja corrompida/incompleta na região
            rects = match_excerpt_ocr(page, trecho)
            if rects:
                method_used = "rapidocr_fallback"

        if not rects:
            unmatched.append(trecho)
        else:
            all_highlights.extend(rects)

    # Caixa de referência para --bbox manual respeita --lado esq/dir quando informado
    ref_rect = page.rect
    if args.lado == "esq":
        ref_rect = pymupdf.Rect(page.rect.x0, page.rect.y0, page.rect.x0 + page.rect.width / 2.0, page.rect.y1)
    elif args.lado == "dir":
        ref_rect = pymupdf.Rect(page.rect.x0 + page.rect.width / 2.0, page.rect.y0, page.rect.x1, page.rect.y1)

    for b_str in args.bbox:
        all_highlights.append(parse_norm_bbox(b_str, ref_rect))

    if unmatched:
        print(
            json.dumps(
                {
                    "status": "erro_trecho_nao_encontrado",
                    "pdf": pdf_path.name,
                    "pagina_pdf": args.pagina,
                    "trechos_nao_encontrados": unmatched,
                    "dica": "Verifique se a página do PDF está correta com --buscar ou passe um trecho contínuo menor.",
                },
                ensure_ascii=False,
                indent=2,
            ),
            file=sys.stderr,
        )
        return 2

    crop_rect = compute_crop_rect(
        page_rect=page.rect,
        highlight_rects=all_highlights,
        lado=args.lado,
        margem_v=args.margem_v,
        incluir_cabecalho=args.incluir_cabecalho,
        incluir_rodape=args.incluir_rodape,
        pagina_inteira=args.pagina_inteira,
    )

    out_img = render_highlighted_crop(
        page=page,
        crop_rect=crop_rect,
        highlight_rects=all_highlights,
        dpi=args.dpi,
    )

    out_path = Path(args.saida).resolve()
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_img.save(str(out_path), format="PNG", optimize=True)

    summary = {
        "status": "ok",
        "pdf": pdf_path.name,
        "pagina_pdf": args.pagina,
        "cabecalho_detectado": detect_printed_header(page),
        "metodo_deteccao": method_used,
        "qtd_faixas_amarelas": len(all_highlights),
        "dimensoes_px": [out_img.width, out_img.height],
        "saida": str(out_path),
        "lembrete": "OBRIGATÓRIO inspecionar visualmente o arquivo PNG com read_file antes de concluir!",
    }
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
