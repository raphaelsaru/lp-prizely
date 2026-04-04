"""
Gera 5 cards do carrossel Prizely usando fal.ai (Flux) + Pillow para texto.
Output: public/carousel-fal-card-{1-5}.png
"""

import fal_client
import urllib.request
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import io

FAL_KEY = "66382faf-89f2-4101-8098-c4e60d7c7273:c7c71a3f6d946d5764a9fb47bf3e1f22"
os.environ["FAL_KEY"] = FAL_KEY

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public")
SIZE = (1080, 1080)

# Colors (hex → RGB)
COLORS = {
    "bg":            (2, 6, 23),
    "primary":       (67, 56, 202),
    "primary_light": (129, 140, 248),
    "secondary":     (14, 165, 233),
    "accent":        (124, 58, 237),
    "white":         (255, 255, 255),
    "slate400":      (148, 163, 184),
    "green":         (16, 185, 129),
    "red":           (239, 68, 68),
    "red_light":     (252, 165, 165),
}

CARDS = [
    {
        "id": 1,
        "image_prompt": (
            "Brazilian PME business owner at modern office desk, looking concerned at laptop screen "
            "showing competitor analytics, warm office lighting, photorealistic, cinematic, "
            "dark dramatic atmosphere, shallow depth of field, --ar 1:1"
        ),
        "badge": "ALERTA PARA PMEs BRASILEIRAS",
        "badge_color": COLORS["red"],
        "badge_text_color": COLORS["red_light"],
        "headline": "Sua concorrência já\nusa IA. E você?",
        "body": "Enquanto sua equipe ainda faz tudo manualmente,\noutras empresas entregam o mesmo resultado\nem horas — não dias.",
        "stat": None,
        "cta": None,
    },
    {
        "id": 2,
        "image_prompt": (
            "Overwhelmed Brazilian office worker surrounded by stacks of paper and spreadsheets, "
            "looking exhausted, modern corporate office, photorealistic cinematic, moody blue lighting, "
            "the worker represents manual inefficiency, --ar 1:1"
        ),
        "badge": "O CUSTO DO TRABALHO MANUAL",
        "badge_color": COLORS["red"],
        "badge_text_color": COLORS["red_light"],
        "headline": "-60% produtividade\nperdida em tarefas manuais.",
        "body": "Atendimento, relatórios, gestão — sua equipe passa\nmais da metade do tempo em coisas que\na IA já resolve sozinha.",
        "stat": "-60%",
        "cta": None,
    },
    {
        "id": 3,
        "image_prompt": (
            "Split screen: left side shows slow manual work with paper and pen, right side shows "
            "fast AI-powered workflow on multiple screens with Claude AI interface, dramatic lighting, "
            "photorealistic, contrast between slow and fast, cinematic quality, --ar 1:1"
        ),
        "badge": "A DIFERENÇA É ABSURDA",
        "badge_color": COLORS["primary"],
        "badge_text_color": COLORS["primary_light"],
        "headline": "10x mais rápido\ncom Claude Code.",
        "body": "Com automação de IA, equipes entregam o mesmo\ntrabalho em 1/10 do tempo — sem contratar\nninguém e sem complexidade técnica.",
        "stat": "10x",
        "cta": None,
    },
    {
        "id": 4,
        "image_prompt": (
            "Successful Brazilian entrepreneur celebrating business growth, looking at rising chart "
            "on laptop, modern bright office, confident and happy expression, photorealistic cinematic, "
            "warm success lighting, aspirational atmosphere, --ar 1:1"
        ),
        "badge": "SEUS CONCORRENTES JÁ CHEGARAM LÁ",
        "badge_color": COLORS["green"],
        "badge_text_color": (110, 231, 183),
        "headline": "50+ empresas geraram\n320% de ROI com a Prizely.",
        "body": "Cada semana sem IA é receita que fica na mesa —\ne espaço de mercado que a concorrência\nestá ocupando agora.",
        "stat": "320%",
        "cta": None,
    },
    {
        "id": 5,
        "image_prompt": (
            "Brazilian business owner shaking hands with AI consultant in modern glass office, "
            "confident and optimistic atmosphere, photorealistic cinematic, bright professional lighting, "
            "partnership and trust, clear future ahead, --ar 1:1"
        ),
        "badge": "SEM RISCO · SEM COMPROMISSO",
        "badge_color": COLORS["secondary"],
        "badge_text_color": (125, 211, 252),
        "headline": "Diagnóstico gratuito.",
        "body": "Em 30 minutos você descobre exatamente onde a IA\npode transformar sua empresa — com resultados\nmensuráveis desde o primeiro dia.",
        "stat": None,
        "cta": "Agende agora →",
    },
]


def generate_image(prompt: str) -> Image.Image:
    """Call fal.ai flux-dev and return PIL Image."""
    result = fal_client.run(
        "fal-ai/flux/dev",
        arguments={
            "prompt": prompt,
            "image_size": "square_hd",
            "num_inference_steps": 28,
            "guidance_scale": 3.5,
            "num_images": 1,
            "enable_safety_checker": True,
        },
    )
    url = result["images"][0]["url"]
    with urllib.request.urlopen(url) as resp:
        return Image.open(io.BytesIO(resp.read())).convert("RGBA").resize(SIZE)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Try system fonts, fall back to default."""
    candidates_bold = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    candidates_regular = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    candidates = candidates_bold if bold else candidates_regular
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def draw_rounded_rect(draw: ImageDraw.Draw, xy, radius: int, fill, outline=None, outline_width=1):
    x0, y0, x1, y1 = xy
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill, outline=outline, width=outline_width)


def add_overlay(base: Image.Image, card: dict) -> Image.Image:
    img = base.copy()
    W, H = img.size

    # Dark gradient overlay (bottom 65% of image)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    for i in range(H):
        progress = max(0.0, (i - H * 0.20) / (H * 0.80))
        alpha = int(min(255, progress * 230))
        draw_ov.line([(0, i), (W, i)], fill=(2, 6, 23, alpha))

    # Top dark bar for badge + logo
    for i in range(int(H * 0.22)):
        progress = 1.0 - (i / (H * 0.22))
        alpha = int(min(180, progress * 180))
        draw_ov.line([(0, i), (W, i)], fill=(2, 6, 23, alpha))

    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)

    font_large = load_font(72, bold=True)
    font_med = load_font(44, bold=True)
    font_body = load_font(34)
    font_badge = load_font(26, bold=True)
    font_stat = load_font(120, bold=True)
    font_logo = load_font(36, bold=True)
    font_counter = load_font(26)
    font_cta = load_font(38, bold=True)

    pad = 56

    # Logo top-left
    draw.text((pad, 44), "Prizely", font=font_logo, fill=COLORS["primary_light"])

    # Card counter top-right
    counter_text = f"{card['id']}/5"
    draw.text((W - pad - 60, 48), counter_text, font=font_counter, fill=COLORS["slate400"])

    # Badge pill
    badge_text = card["badge"]
    bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
    bw = bbox[2] - bbox[0]
    badge_x = pad
    badge_y = 108
    pill_pad_x, pill_pad_y = 20, 10
    bc = card["badge_color"]
    draw_rounded_rect(
        draw,
        (badge_x, badge_y, badge_x + bw + pill_pad_x * 2 + 16, badge_y + 44),
        radius=22,
        fill=(bc[0], bc[1], bc[2], 45),
        outline=(bc[0], bc[1], bc[2], 100),
        outline_width=1,
    )
    # dot
    dot_x = badge_x + pill_pad_x + 4
    dot_y = badge_y + 16
    draw.ellipse([dot_x, dot_y, dot_x + 10, dot_y + 10], fill=card["badge_color"])
    draw.text((dot_x + 18, badge_y + pill_pad_y), badge_text, font=font_badge, fill=card["badge_text_color"])

    # Content area starts at 55% from top
    content_y = int(H * 0.52)

    # Stat (big number) if present
    if card["stat"]:
        stat_bbox = draw.textbbox((0, 0), card["stat"], font=font_stat)
        stat_w = stat_bbox[2] - stat_bbox[0]
        draw.text((pad, content_y), card["stat"], font=font_stat, fill=COLORS["primary_light"])
        content_y += (stat_bbox[3] - stat_bbox[1]) + 16

    # Headline
    for line in card["headline"].split("\n"):
        draw.text((pad, content_y), line, font=font_large, fill=COLORS["white"])
        lbbox = draw.textbbox((0, 0), line, font=font_large)
        content_y += (lbbox[3] - lbbox[1]) + 8
    content_y += 20

    # Body
    for line in card["body"].split("\n"):
        draw.text((pad, content_y), line, font=font_body, fill=COLORS["slate400"])
        lbbox = draw.textbbox((0, 0), line, font=font_body)
        content_y += (lbbox[3] - lbbox[1]) + 6
    content_y += 28

    # CTA button
    if card["cta"]:
        cta_bbox = draw.textbbox((0, 0), card["cta"], font=font_cta)
        cta_w = cta_bbox[2] - cta_bbox[0]
        btn_pad_x, btn_pad_y = 44, 18
        btn_x0 = pad
        btn_y0 = content_y
        btn_x1 = btn_x0 + cta_w + btn_pad_x * 2
        btn_y1 = btn_y0 + (cta_bbox[3] - cta_bbox[1]) + btn_pad_y * 2
        sc = COLORS["secondary"]
        pc = COLORS["primary"]
        # Simple gradient pill (two overlaid semi-transparent rects)
        draw_rounded_rect(draw, (btn_x0, btn_y0, btn_x1, btn_y1), radius=40,
                          fill=(pc[0], pc[1], pc[2], 220))
        draw_rounded_rect(draw, (btn_x0, btn_y0, btn_x1, btn_y1), radius=40,
                          fill=(sc[0], sc[1], sc[2], 80))
        draw.text((btn_x0 + btn_pad_x, btn_y0 + btn_pad_y), card["cta"], font=font_cta, fill=COLORS["white"])

    return img.convert("RGB")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for card in CARDS:
        print(f"\n[Card {card['id']}/5] Gerando imagem via fal.ai...")
        base = generate_image(card["image_prompt"])
        print(f"[Card {card['id']}/5] Compondo texto...")
        final = add_overlay(base, card)
        out_path = os.path.join(OUTPUT_DIR, f"carousel-fal-card-{card['id']}.png")
        final.save(out_path, "PNG", quality=95)
        print(f"[Card {card['id']}/5] Salvo: {out_path}")

    print("\nCarrossel gerado com sucesso!")
    print("Arquivos: public/carousel-fal-card-1.png ... public/carousel-fal-card-5.png")


if __name__ == "__main__":
    main()
