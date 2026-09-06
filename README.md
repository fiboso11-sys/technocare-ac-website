# TECHNO CARE Website

Corporate website for **TECHNO CARE**, an air-conditioning and HVAC service business in Nolambur, Chennai.

Production domain: [https://www.technocareac.com](https://www.technocareac.com)  
Apex `https://technocareac.com` redirects to the www host.

This repository is the official online presence. Content is driven from centralized data files so company details can be updated in one place.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zod
- Lucide React
- Vercel-ready deployment

## Prerequisites

- Node.js 20 or later
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill values only when they exist.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL. Production value: `https://www.technocareac.com` |
| `CONTACT_TO_EMAIL` | Destination inbox for website enquiries |
| `RESEND_API_KEY` | Resend API key for email delivery |

Until both contact variables are set, the enquiry form validates input and asks the visitor to call **094449 27947**. Do not commit secrets.

## Content editing

Update these files rather than rewriting page components:

- `src/data/company.ts` — name, phone, address, service area, feature flags, Google rating
- `src/data/services.ts` — service pages, SEO titles, related services
- `src/data/navigation.ts` — header, footer, CTA labels
- `src/data/content.ts` — about copy, process steps, benefit copy

Empty fields are hidden in the interface. Do not invent missing details.

### Feature flags in `company.ts`

- `showWhatsApp` — keep `false` until WhatsApp is approved
- `showEmail` — keep `false` until a real email exists
- `showBusinessHours` — keep `false` until weekly hours are verified
- `showGoogleRating` — rating block on the homepage
- `googleMapsUrl` / `googleReviewsUrl` — set only when exact URLs are available
- Directions currently use a Google Maps HTTPS search of the approved address

## Project structure

```text
src/
  app/                 routes, metadata, sitemap, robots
  components/          layout, sections, services, contact, UI
  data/                company and service content
  lib/                 maps, SEO, validation, contact delivery
  types/
public/
  brand/
  images/
  services/
```

## Maps and phone

- Call links use `tel:+919444927947`
- Display number is `094449 27947`
- Directions use `https://www.google.com/maps/dir/?api=1&destination=...` until a verified place URL is stored in `company.googleMapsUrl`

## SEO

- Canonical host: `https://www.technocareac.com`
- `src/app/sitemap.ts` and `src/app/robots.ts`
- Open Graph image via `src/app/opengraph-image.tsx`
- JSON-LD uses `HVACBusiness` with verified name, telephone, address, and area served
- Do not add fake ratings, hours, coordinates, or reviews to structured data

## Vercel and domain

Do not deploy until the owner has approved the local site.

When deploying:

1. Import the GitHub repository into Vercel
2. Prefer `NEXT_PUBLIC_SITE_URL=https://www.technocareac.com` (code also falls back to this)
3. Attach `www.technocareac.com` as the primary website host
4. Attach `technocareac.com` and redirect apex → www (Next.js host redirect is configured in `next.config.ts`)
5. Domain is registered on Vercel with Vercel nameservers — no third-party DNS edits unless Vercel shows otherwise
6. Do not change MX, SPF, DKIM, DMARC, or unrelated TXT records on any third-party DNS

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Brand assets

Until official logo files are supplied, the site uses a typographic TECHNO CARE mark with a Chennai service subtitle.

Place owner-approved files using the checklist in `OWNER-ASSETS.md`:

- `public/brand/` — logo
- `public/images/technocare/` — hero and business photos
- `public/services/` — optional service-card photos

Enable paths in `src/data/media.ts` after files are added.
