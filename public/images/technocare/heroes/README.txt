# TECHNO CARE — Owner Assets

Category A images are marketing/lifestyle visuals.
Category B images are real TECHNO CARE work photos only.

## Marketing heroes (`public/images/technocare/heroes/`)

| Asset key | File | Source | Status |
|---|---|---|---|
| HOMEPAGE_HERO | `home-hero.webp` | GENERATED | Enabled |
| AC_SALES_HERO | `ac-sales-hero.webp` | GENERATED | Enabled |
| INSTALLATION_HERO | `installation-hero.webp` | GENERATED | Enabled |
| SERVICE_HERO | `repair-service-hero.webp` | GENERATED | Enabled |
| AMC_HERO | `amc-hero.webp` | GENERATED | Enabled |
| REFURBISHING_HERO | `refurbishing-hero.webp` | GENERATED | Enabled |
| HVAC_HERO | `hvac-commercial-hero.webp` | GENERATED | Enabled |

PNG sources are also retained beside the WebP files for replacement.

To replace with owner or licensed photography:
1. Drop the new file into `public/images/technocare/heroes/`
2. Prefer WebP (~1600–2000px wide)
3. Update `src/data/media.ts` (`src`, `alt`, `sourceType`, `enabled`)

## Brand logos (`public/images/technocare/brands/`)

| Asset key | Expected file | Source | Status |
|---|---|---|---|
| PANASONIC_LOGO | `panasonic.svg` (or `.webp`/`.png`) | OWNER PROVIDED | Missing — text strip used |
| IFB_LOGO | `ifb.svg` | OWNER PROVIDED | Missing — text strip used |
| DAIKIN_LOGO | `daikin.svg` | OWNER PROVIDED | Missing — text strip used |
| O_GENERAL_LOGO | `o-general.svg` | OWNER PROVIDED | Missing — text strip used |
| MITSUBISHI_ELECTRIC_LOGO | `mitsubishi-electric.svg` | OWNER PROVIDED | Missing — text strip used |

Enable each logo in `src/data/brands.ts` only after the official file exists.
Do not use fake or distorted trademark artwork.

## Real work gallery (`public/images/technocare/gallery/`)

| Asset key | Source | Status |
|---|---|---|
| REAL_GALLERY_PHOTOS | OWNER PROVIDED | None enabled |

Register photos in `src/data/gallery.ts` with `enabled: true`.
Never present Category A lifestyle images as completed TECHNO CARE jobs.

## Site logo

| Asset | Path | Status |
|---|---|---|
| TECHNO CARE logo | `public/brand/logo.png` | Optional — BrandMark fallback in use |

## Notes

- Marketing heroes are labeled on-page as lifestyle visuals, not project photos.
- Future brand landings (`/brands/panasonic`, etc.) are prepared in `src/data/brands.ts` but not published until owner content exists.
