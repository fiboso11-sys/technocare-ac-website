# TECHNO CARE — Owner Assets

Category A images are marketing/lifestyle visuals (may be owner, licensed, or generated).
Category B images are real TECHNO CARE work photographs only.

## Marketing heroes

Path: `public/images/technocare/heroes/`  
Config: `src/data/media.ts`

| Key | File | Source | Status |
|---|---|---|---|
| HOMEPAGE_HERO | `home-hero.webp` | GENERATED | Enabled |
| AC_SALES_HERO | `ac-sales-hero.webp` | GENERATED | Enabled |
| INSTALLATION_HERO | `installation-hero.webp` | GENERATED | Enabled |
| SERVICE_HERO | `repair-service-hero.webp` | GENERATED | Enabled |
| AMC_HERO | `amc-hero.webp` | GENERATED | Enabled |
| REFURBISHING_HERO | `refurbishing-hero.webp` | GENERATED | Enabled |
| HVAC_HERO | `hvac-commercial-hero.webp` | GENERATED | Enabled |

PNG masters from generation are retained under the Cursor assets workspace folder for replacement; only optimized WebP files ship in `public/`.

## Brand logos

Path: `public/images/technocare/brands/`  
Config: `src/data/brands.ts`  
Rule: Never AI-redraw trademarks. Prefer manufacturer official / owner-provided assets only.

| Brand | FILE | FORMAT | SOURCE_TYPE | STATUS |
|---|---|---|---|---|
| Panasonic | `panasonic.png` | PNG | Owner-pasted brand artwork | OWNER_PROVIDED |
| IFB | `ifb.png` | PNG (transparent) | Official manufacturer website (`ifbappliances.com` header logo) | OFFICIAL_ASSET |
| Daikin | `daikin.png` | PNG | Official manufacturer brand resource (Daikin Industries VI logo pack, daikin.co.jp) | OFFICIAL_ASSET |
| O General | `o-general.png` | PNG | Owner-pasted brand artwork | OWNER_PROVIDED |
| Mitsubishi Electric | `mitsubishi-electric.svg` | SVG | Official manufacturer website (`mitsubishielectric.com` header logo) | OFFICIAL_ASSET |

Working downloads / unpack notes may exist under `_incoming/` for owner review only — do not link from the public UI.

## Real work gallery

Path: `public/images/technocare/gallery/`  
Config: `src/data/gallery.ts`

| Key | Source | Status |
|---|---|---|
| REAL_GALLERY_PHOTOS | OWNER PROVIDED | None enabled |

## Site logo

| Key | Path | Status |
|---|---|---|
| TECHNO_CARE_LOGO | `public/brand/logo.png` | Optional — BrandMark fallback in use |

## Replacement rules

1. Do not scrape Google Images / Pinterest / social media for assets.
2. Prefer ~1600–2000px wide WebP for heroes.
3. Update `sourceType` in `media.ts` to `owner` or `licensed` when replacing generated files.
4. Never register lifestyle/marketing images in the gallery as completed jobs.
5. Future brand pages (`/brands/panasonic`, etc.) stay unpublished until owner content exists (`pagePublished: false`).
