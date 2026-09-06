# TECHNO CARE — Owner Asset Checklist

Use this list to replace temporary brand and image placeholders with real TECHNO CARE materials.

Do **not** download competitor photos or hotlink Google Business images. Export or photograph originals and place them in the folders below.

## Folders

| Path | Purpose |
| --- | --- |
| `public/brand/` | Logo and favicon |
| `public/images/technocare/` | Hero and business photography |
| `public/services/` | Optional service-card photos |

## Required / high priority

1. **Official logo**
   - Preferred: SVG or transparent PNG
   - Place as `public/brand/logo.png` or `public/brand/logo.svg`
   - Then set `media.logo.enabled = true` in `src/data/media.ts` (and update `src` if the filename differs)

2. **Hero photograph** (landscape)
   - Technician servicing a wall-mounted split AC, installation work, or HVAC inspection
   - At least **1600px** wide recommended
   - Place as `public/images/technocare/hero.webp` (JPG/PNG also fine if you update the path)
   - Then set `media.hero.enabled = true` in `src/data/media.ts`
   - Until enabled, the homepage uses an **inline SVG** fallback (no broken image request)
   - Do not set `enabled: true` until the file is actually present

## Strongly recommended

3. Store / front-office photo — landscape → `public/images/technocare/storefront.webp`
4. AC installation photo → `public/services/ac-installation.webp`
5. AC repair / service photo → `public/services/ac-repair.webp`
6. AC maintenance / cleaning photo → `public/services/ac-maintenance.webp` or `ac-cleaning.webp`
7. HVAC / duct work photo (if available) → `public/services/hvac-repair.webp` or `duct-cleaning.webp`
8. Team photo (optional) → `public/images/technocare/team.webp`

## Enabling service photos

After adding a file under `public/services/`, uncomment or add the matching entry in `src/data/media.ts`:

```ts
export const servicePhotos = {
  "ac-installation": "/services/ac-installation.webp",
  "ac-repair": "/services/ac-repair.webp",
  // ...
};
```

Cards fall back to professional icons when a photo path is not set.

## Notes

- Exact pixel dimensions are not required; `next/image` handles responsive sizing
- Prefer landscape for hero and service cards
- Alt text should describe the work shown without inventing employee names
- Keep Google Maps place / reviews URLs in `src/data/company.ts` (`googleMapsPlaceUrl`, `googleReviewsUrl`) when you have the exact official links
- Until `googleMapsPlaceUrl` is set, Directions opens an HTTPS Maps search for `googleMapsFallbackQuery` (TECHNO CARE Nolambur Chennai) — not an address-only `/maps/dir` link
