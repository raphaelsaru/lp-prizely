"""
Cria campanha de carrossel no Meta Ads para Prizely.
Estrutura:
  - 1 Campanha (CBO, R$25/dia, objetivo TRAFFIC)
  - 2 Ad Sets (um por criativo, Instagram only)
  - 2 Ad Creatives (carrossel Remotion + carrossel fal.ai)
  - 2 Ads

Pré-requisitos:
  - USER_ACCESS_TOKEN com ads_management + ads_read + pages_read_engagement
  - PAGE_ID da Página do Facebook conectada ao Instagram da Prizely
  - LANDING_PAGE_URL do site em produção
"""

import os
import sys
import json
import base64
import requests

# ─── CONFIG ─────────────────────────────────────────────────────────────────

APP_ID = "836469978744918"
APP_SECRET = "2264dae011613cf07c0a7cc7592bc05d"
AD_ACCOUNT_ID = "act_2240063916169852"

# Preencher antes de rodar:
USER_ACCESS_TOKEN = os.getenv("META_ACCESS_TOKEN", "SEU_USER_ACCESS_TOKEN_AQUI")
PAGE_ID = os.getenv("META_PAGE_ID", "105503865969202")
LANDING_PAGE_URL = os.getenv("LANDING_PAGE_URL", "https://agencia.prizely.com.br")
PIXEL_ID = os.getenv("META_PIXEL_ID", "886849741056313")

DAILY_BUDGET_BRL_CENTS = 2500  # R$25,00 em centavos
API_VERSION = "v21.0"
BASE_URL = f"https://graph.facebook.com/{API_VERSION}"

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "..", "public")

# Cards: (image_path, headline, description)
CAROUSEL_REMOTION = [
    ("carousel-card-1.png", "Sua concorrência já usa IA. E você?",      "Enquanto você trabalha manualmente, eles entregam 10x mais rápido."),
    ("carousel-card-2.png", "-60% produtividade perdida",               "Tarefas repetitivas consomem metade do tempo da sua equipe."),
    ("carousel-card-3.png", "10x mais rápido com Claude Code",          "Com IA, sua equipe entrega o mesmo em 1/10 do tempo."),
    ("carousel-card-4.png", "320% de ROI · 50+ empresas",              "Seus concorrentes já chegaram lá. Cada semana de atraso custa caro."),
    ("carousel-card-5.png", "Diagnóstico gratuito",                     "30 minutos para descobrir onde a IA transforma sua empresa."),
]

CAROUSEL_FAL = [
    ("carousel-fal-card-1.png", "Sua concorrência já usa IA. E você?",  "Enquanto você trabalha manualmente, eles entregam 10x mais rápido."),
    ("carousel-fal-card-2.png", "-60% produtividade perdida",            "Tarefas repetitivas consomem metade do tempo da sua equipe."),
    ("carousel-fal-card-3.png", "10x mais rápido com Claude Code",       "Com IA, sua equipe entrega o mesmo em 1/10 do tempo."),
    ("carousel-fal-card-4.png", "320% de ROI · 50+ empresas",           "Seus concorrentes já chegaram lá. Cada semana de atraso custa caro."),
    ("carousel-fal-card-5.png", "Diagnóstico gratuito",                  "30 minutos para descobrir onde a IA transforma sua empresa."),
]

PRIMARY_TEXT = (
    "Sua empresa ainda depende de trabalho manual enquanto a concorrência "
    "já usa IA para ser 10x mais produtiva. Descubra como implementar IA "
    "na sua empresa — diagnóstico gratuito, sem compromisso."
)

# ─── HELPERS ────────────────────────────────────────────────────────────────

def api(method: str, endpoint: str, **kwargs) -> dict:
    url = f"{BASE_URL}/{endpoint}"
    params = kwargs.get("params", {})
    params["access_token"] = USER_ACCESS_TOKEN
    kwargs["params"] = params
    resp = getattr(requests, method)(url, **kwargs)
    data = resp.json()
    if "error" in data:
        print(f"  [API ERROR] {data['error']}")
        sys.exit(1)
    return data


def upload_image(image_path: str) -> str:
    """Upload image to ad account and return image hash."""
    print(f"  Uploading {os.path.basename(image_path)}...")
    with open(image_path, "rb") as f:
        image_bytes = f.read()
    encoded = base64.b64encode(image_bytes).decode()
    result = api(
        "post",
        f"{AD_ACCOUNT_ID}/adimages",
        data={"bytes": encoded},
    )
    hashes = result.get("images", {})
    # The key is the filename
    filename = os.path.basename(image_path)
    if filename in hashes:
        return hashes[filename]["hash"]
    # Fallback: first value
    return list(hashes.values())[0]["hash"]


# ─── CAMPAIGN ───────────────────────────────────────────────────────────────

def create_campaign() -> str:
    print("\n[1/5] Criando campanha...")
    result = api(
        "post",
        f"{AD_ACCOUNT_ID}/campaigns",
        data={
            "name": "META_Traffic_PME-IA_DiagnosticoGratuito_2026Q2",
            "objective": "OUTCOME_TRAFFIC",
            "status": "PAUSED",  # Inicia pausada — você ativa manualmente
            "special_ad_categories": ["NONE"],
            "daily_budget": DAILY_BUDGET_BRL_CENTS,  # CBO: budget na campanha
            "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
        },
    )
    campaign_id = result["id"]
    print(f"  Campanha criada: {campaign_id}")
    return campaign_id


# ─── AD SETS ────────────────────────────────────────────────────────────────

def create_adset(campaign_id: str, name: str) -> str:
    print(f"\n[2/5] Criando ad set: {name}...")
    result = api(
        "post",
        f"{AD_ACCOUNT_ID}/adsets",
        data={
            "name": name,
            "campaign_id": campaign_id,
            "status": "PAUSED",
            "optimization_goal": "LINK_CLICKS",
            "billing_event": "IMPRESSIONS",
            "promoted_object": json.dumps({"pixel_id": PIXEL_ID, "custom_event_type": "LEAD"}),
            # Targeting: Brasil, empresários/PMEs, interesses em IA e automação
            "targeting": json.dumps({
                "geo_locations": {
                    "countries": ["BR"],
                },
                "age_min": 25,
                "age_max": 55,
                "publisher_platforms": ["instagram"],
                "instagram_positions": ["stream", "story", "explore", "reels"],
                "facebook_positions": [],
                "audience_network_positions": [],
                "flexible_spec": [
                    {
                        "interests": [
                            {"id": "6003114185392", "name": "Empreendedorismo"},
                            {"id": "6003371567474", "name": "Empreendedorismo (negócios e finanças)"},
                            {"id": "6002898176962", "name": "Inteligência artificial (computação)"},
                            {"id": "6003434418531", "name": "Business process automation"},
                        ],
                        "behaviors": [
                            {"id": "6002714898572", "name": "Proprietários de pequenas empresas"},
                        ],
                    }
                ],
            }),
            "start_time": "2026-04-05T00:00:00-0300",
        },
    )
    adset_id = result["id"]
    print(f"  Ad Set criado: {adset_id}")
    return adset_id


# ─── CREATIVE ───────────────────────────────────────────────────────────────

def create_carousel_creative(name: str, cards: list) -> str:
    print(f"\n[3/5] Criando criativo: {name}...")

    # Upload all card images
    child_attachments = []
    for image_file, headline, description in cards:
        image_path = os.path.join(PUBLIC_DIR, image_file)
        image_hash = upload_image(image_path)
        child_attachments.append({
            "link": LANDING_PAGE_URL,
            "name": headline,
            "description": description,
            "image_hash": image_hash,
        })

    object_story_spec = {
        "page_id": PAGE_ID,
        "link_data": {
            "link": LANDING_PAGE_URL,
            "message": PRIMARY_TEXT,
            "child_attachments": child_attachments,
            "multi_share_optimized": False,
            "multi_share_end_card": False,
        },
    }

    result = api(
        "post",
        f"{AD_ACCOUNT_ID}/adcreatives",
        data={
            "name": name,
            "object_story_spec": json.dumps(object_story_spec),
        },
    )
    creative_id = result["id"]
    print(f"  Criativo criado: {creative_id}")
    return creative_id


# ─── ADS ────────────────────────────────────────────────────────────────────

def create_ad(name: str, adset_id: str, creative_id: str) -> str:
    print(f"\n[4/5] Criando ad: {name}...")
    result = api(
        "post",
        f"{AD_ACCOUNT_ID}/ads",
        data={
            "name": name,
            "adset_id": adset_id,
            "creative": json.dumps({"creative_id": creative_id}),
            "status": "PAUSED",
            "tracking_specs": json.dumps([
                {"action.type": ["offsite_conversion"], "fb_pixel": [PIXEL_ID]},
                {"action.type": ["link_click"], "fb_pixel": [PIXEL_ID]},
            ]),
        },
    )
    ad_id = result["id"]
    print(f"  Ad criado: {ad_id}")
    return ad_id


# ─── MAIN ───────────────────────────────────────────────────────────────────

def validate_config():
    errors = []
    if USER_ACCESS_TOKEN == "SEU_USER_ACCESS_TOKEN_AQUI":
        errors.append("META_ACCESS_TOKEN não definido (export META_ACCESS_TOKEN=...)")
    if PAGE_ID == "SEU_PAGE_ID_AQUI":
        errors.append("META_PAGE_ID não definido (export META_PAGE_ID=...)")
    if LANDING_PAGE_URL == "https://prizely.com.br":
        print("  [WARN] LANDING_PAGE_URL usando default (https://prizely.com.br) — confirme se está correto")
    if errors:
        print("\n[ERRO] Configuração incompleta:")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)


def main():
    validate_config()

    print("=" * 60)
    print("PRIZELY — Criação de Campanha Meta Ads")
    print(f"Conta: {AD_ACCOUNT_ID}")
    print(f"Budget: R$25/dia (CBO)")
    print(f"Placements: Instagram only")
    print(f"Landing Page: {LANDING_PAGE_URL}")
    print("=" * 60)

    # 1. Campanha CBO
    campaign_id = create_campaign()

    # 2. Ad Sets (um por criativo)
    adset_remotion = create_adset(campaign_id, "AdSet_Remotion_PME-IA-BR_IG")
    adset_fal = create_adset(campaign_id, "AdSet_FalAI_PME-IA-BR_IG")

    # 3. Criativos
    creative_remotion = create_carousel_creative(
        "Carrossel_Remotion_Concorrência-IA_2026Q2",
        CAROUSEL_REMOTION,
    )
    creative_fal = create_carousel_creative(
        "Carrossel_FalAI_Concorrência-IA_2026Q2",
        CAROUSEL_FAL,
    )

    # 4. Ads
    ad_remotion = create_ad(
        "Ad_Remotion_Carrossel_PME-IA",
        adset_remotion,
        creative_remotion,
    )
    ad_fal = create_ad(
        "Ad_FalAI_Carrossel_PME-IA",
        adset_fal,
        creative_fal,
    )

    print("\n" + "=" * 60)
    print("CAMPANHA CRIADA COM SUCESSO (status: PAUSED)")
    print(f"  Campaign ID:        {campaign_id}")
    print(f"  Ad Set (Remotion):  {adset_remotion}")
    print(f"  Ad Set (fal.ai):    {adset_fal}")
    print(f"  Creative Remotion:  {creative_remotion}")
    print(f"  Creative fal.ai:    {creative_fal}")
    print(f"  Ad Remotion:        {ad_remotion}")
    print(f"  Ad fal.ai:          {ad_fal}")
    print("=" * 60)
    print("\nPróximos passos:")
    print("  1. Revise os criativos no Ads Manager")
    print("  2. Confirme o pixel de conversão no ad set")
    print("  3. Ative a campanha quando estiver pronto")


if __name__ == "__main__":
    main()
