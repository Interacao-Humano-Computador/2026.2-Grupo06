#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
exportar_lista_pdf.py — Gera um PDF acadêmico autônomo de Lista de Verificação de IHC
no padrão visual UnB/FGA (evoluído a partir das listas de contexto/ para incluir
obrigatoriamente 'Autor do item: Bruno Ferreira Dornelas' em cada item).

Entrada: arquivo JSON UTF-8 descrevendo cabeçalho, seções/itens, referências e caminhos
das imagens destacadas (geradas previamente com destacar_trecho_pdf.py).

Uso:
  C:\\Python314\\python.exe exportar_lista_pdf.py --json lista_spec.json --saida lista_final.pdf
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path
from typing import Any, Dict, List, Tuple
from xml.sax.saxutils import escape

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Image,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


def register_unicode_fonts() -> Tuple[str, str, str]:
    """Registra fontes TrueType com suporte completo a UTF-8 / Português no Windows/Linux."""
    win_fonts = Path(os.environ.get("WINDIR", r"C:\Windows")) / "Fonts"
    candidates = [
        ("ArialUni", win_fonts / "arial.ttf", win_fonts / "arialbd.ttf", win_fonts / "ariali.ttf"),
        ("SegoeUI", win_fonts / "segoeui.ttf", win_fonts / "segoeuib.ttf", win_fonts / "segoeuii.ttf"),
        ("Calibri", win_fonts / "calibri.ttf", win_fonts / "calibrib.ttf", win_fonts / "calibrii.ttf"),
    ]
    for fam, reg, bold, ital in candidates:
        if reg.is_file() and bold.is_file() and ital.is_file():
            pdfmetrics.registerFont(TTFont(fam, str(reg)))
            pdfmetrics.registerFont(TTFont(f"{fam}-Bold", str(bold)))
            pdfmetrics.registerFont(TTFont(f"{fam}-Italic", str(ital)))
            return fam, f"{fam}-Bold", f"{fam}-Italic"

    return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"


def make_scaled_image(img_path: Path, max_w: float, max_h: float) -> Image:
    with PILImage.open(str(img_path)) as im:
        w_px, h_px = im.size
    ratio = min(max_w / float(w_px), max_h / float(h_px))
    return Image(str(img_path), width=w_px * ratio, height=h_px * ratio)


def add_page_number(canvas, doc):
    canvas.saveState()
    canvas.setFont(doc.base_font, 8.5)
    canvas.setFillColor(colors.HexColor("#555555"))
    canvas.drawRightString(A4[0] - 18 * mm, 11 * mm, f"Página {doc.page}")
    canvas.drawString(18 * mm, 11 * mm, "IHC — FCTE/FGA · UnB · Grupo 06")
    canvas.restoreState()


def build_pdf(spec: Dict[str, Any], out_pdf: Path, json_dir: Path) -> None:
    font_reg, font_bold, font_ital = register_unicode_fonts()

    doc = SimpleDocTemplate(
        str(out_pdf),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=18 * mm,
        title=spec.get("titulo", "Lista de Verificação de IHC"),
        author=spec.get("autor_padrao", "Bruno Ferreira Dornelas"),
    )
    doc.base_font = font_reg
    avail_w = A4[0] - 36 * mm

    styles = getSampleStyleSheet()
    st_inst = ParagraphStyle(
        "Inst",
        parent=styles["Normal"],
        fontName=font_bold,
        fontSize=10.5,
        leading=13.5,
        alignment=1,
        textColor=colors.HexColor("#1B365D"),
    )
    st_meta = ParagraphStyle(
        "Meta",
        parent=styles["Normal"],
        fontName=font_reg,
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor("#222222"),
    )
    st_title = ParagraphStyle(
        "DocTitle",
        parent=styles["Heading1"],
        fontName=font_bold,
        fontSize=14,
        leading=18,
        alignment=1,
        spaceBefore=6,
        spaceAfter=6,
        textColor=colors.HexColor("#0F2942"),
    )
    st_sec = ParagraphStyle(
        "SecHeading",
        parent=styles["Heading2"],
        fontName=font_bold,
        fontSize=11.5,
        leading=15,
        spaceBefore=10,
        spaceAfter=4,
        textColor=colors.HexColor("#1B365D"),
    )
    st_item_title = ParagraphStyle(
        "ItemTitle",
        parent=styles["Heading3"],
        fontName=font_bold,
        fontSize=10.5,
        leading=14,
        spaceBefore=6,
        spaceAfter=3,
        textColor=colors.HexColor("#0F2942"),
    )
    st_question = ParagraphStyle(
        "Question",
        parent=styles["Normal"],
        fontName=font_reg,
        fontSize=9.8,
        leading=13.8,
        spaceAfter=4,
        textColor=colors.HexColor("#111111"),
    )
    st_small = ParagraphStyle(
        "SmallMeta",
        parent=styles["Normal"],
        fontName=font_reg,
        fontSize=8.8,
        leading=12.2,
        spaceAfter=2,
        textColor=colors.HexColor("#333333"),
    )
    st_caption = ParagraphStyle(
        "Caption",
        parent=styles["Normal"],
        fontName=font_ital,
        fontSize=8.4,
        leading=11.5,
        alignment=1,
        spaceBefore=3,
        spaceAfter=8,
        textColor=colors.HexColor("#444444"),
    )

    story: List[Any] = []

    # Cabeçalho Institucional UnB / FCTE-FGA
    universidade = spec.get(
        "universidade",
        "Universidade de Brasília — UnB · Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA)",
    )
    disciplina = spec.get("disciplina", "Interação Humano-Computador")
    professor = spec.get("professor", "André Barros de Sales")
    grupo = spec.get("grupo", "06")
    autor_padrao = spec.get("autor_padrao", "Bruno Ferreira Dornelas")
    matricula = spec.get("matricula", "242015138")
    opcoes = spec.get(
        "opcoes_resposta",
        "(   ) Conforme      (   ) Não Conforme      (   ) Não se Aplica",
    )

    story.append(Paragraph(escape(universidade), st_inst))
    story.append(Spacer(1, 3 * mm))

    meta_html = (
        f"<b>Disciplina:</b> {escape(disciplina)} &nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<b>Professor:</b> {escape(professor)}<br/>"
        f"<b>Grupo:</b> {escape(str(grupo))} &nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<b>Autor:</b> {escape(autor_padrao)} &nbsp;&nbsp;|&nbsp;&nbsp; "
        f"<b>Matrícula:</b> {escape(str(matricula))}"
    )
    meta_box = Table([[Paragraph(meta_html, st_meta)]], colWidths=[avail_w])
    meta_box.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F4F6F9")),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#CBD5E1")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(meta_box)
    story.append(Spacer(1, 3 * mm))

    story.append(Paragraph(escape(spec.get("titulo", "LISTA DE VERIFICAÇÃO")), st_title))

    instrucoes = spec.get(
        "instrucoes",
        "Instruções: Avalie cada item de forma independente apenas pelo seu enunciado autocontido, "
        "assinalando Conforme, Não Conforme ou Não se Aplica.",
    )
    story.append(Paragraph(escape(instrucoes), st_small))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#1B365D")))
    story.append(Spacer(1, 3 * mm))

    fig_counter = 0
    current_sec = None

    for idx, item in enumerate(spec.get("itens", []), start=1):
        secao = item.get("secao")
        if secao and secao != current_sec:
            current_sec = secao
            story.append(Paragraph(escape(secao), st_sec))

        item_id = item.get("id", f"Item {idx:02d}")
        titulo_curto = item.get("titulo", "")
        heading_txt = f"{item_id} — {titulo_curto}" if titulo_curto else str(item_id)
        autor_item = item.get("autor", autor_padrao)
        pergunta = item["pergunta"]
        como_verificar = item.get("como_verificar")
        referencia = item["referencia"]
        trecho_citado = item.get("trecho_destacado", "")

        block: List[Any] = []
        block.append(Paragraph(escape(heading_txt), st_item_title))
        block.append(Paragraph(escape(pergunta), st_question))

        if como_verificar:
            block.append(
                Paragraph(f"<b>Critério de julgamento:</b> {escape(como_verificar)}", st_small)
            )

        block.append(Paragraph(f"<b>Avaliação:</b> {escape(opcoes)}", st_small))
        block.append(Paragraph(f"<b>Autor do item:</b> {escape(autor_item)}", st_small))
        block.append(Paragraph(f"<b>Fonte (ABNT):</b> {escape(referencia)}", st_small))

        if trecho_citado:
            block.append(
                Paragraph(
                    f"<b>Trecho destacado em amarelo:</b> <i>“{escape(trecho_citado)}”</i>",
                    st_small,
                )
            )

        imagens = item.get("imagens") or ([item["imagem"]] if item.get("imagem") else [])
        for sub_idx, img_rel in enumerate(imagens):
            fig_counter += 1
            img_path = Path(img_rel)
            if not img_path.is_absolute():
                img_path = (json_dir / img_path).resolve()
            if not img_path.is_file():
                raise FileNotFoundError(f"Imagem não encontrada para '{heading_txt}': {img_path}")

            block.append(Spacer(1, 2 * mm))
            block.append(make_scaled_image(img_path, max_w=avail_w * 0.94, max_h=88 * mm))
            legenda_padrao = (
                item.get("legenda")
                if len(imagens) == 1 and item.get("legenda")
                else f"Figura {fig_counter} — Recorte da página de referência com o trecho destacado em amarelo ({item_id})."
            )
            if item.get("legenda") and not legenda_padrao.startswith("Figura"):
                legenda_padrao = f"Figura {fig_counter} — {legenda_padrao}"
            block.append(Paragraph(escape(legenda_padrao), st_caption))

        block.append(HRFlowable(width="100%", thickness=0.4, color=colors.HexColor("#CBD5E1")))
        block.append(Spacer(1, 2.5 * mm))
        story.append(KeepTogether(block))

    # Seção final de Referências consolidadas (se informada)
    refs_finais = spec.get("referencias_finais", [])
    if refs_finais:
        story.append(Spacer(1, 4 * mm))
        story.append(Paragraph("Referências", st_sec))
        for r_idx, ref_txt in enumerate(refs_finais, start=1):
            story.append(Paragraph(f"[{r_idx}] {escape(ref_txt)}", st_small))

    doc.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Exporta uma Lista de Verificação de IHC em PDF autônomo a partir de um JSON."
    )
    parser.add_argument("--json", required=True, help="Caminho do arquivo JSON de especificação da lista.")
    parser.add_argument("--saida", required=True, help="Caminho do arquivo PDF de saída.")
    args = parser.parse_args()

    json_path = Path(args.json).resolve()
    out_pdf = Path(args.saida).resolve()
    out_pdf.parent.mkdir(parents=True, exist_ok=True)

    with open(json_path, "r", encoding="utf-8") as fh:
        spec = json.load(fh)

    build_pdf(spec, out_pdf, json_path.parent)
    print(json.dumps({"status": "ok", "pdf_gerado": str(out_pdf)}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())

