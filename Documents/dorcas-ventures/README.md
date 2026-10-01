# Dorcas Ventures — Next.js (App Router)

Ghana's premier plastering & ceiling materials company website.

## Stack
- **Next.js 14** — App Router
- **CSS Modules** — one per component (strict Separation of Concerns)
- **No external UI libraries** — custom hooks, vanilla CSS

## Project Structure
```
dorcas-ventures/
├── app/
│   ├── layout.js           # Root layout, fonts, metadata
│   ├── page.js             # Page composition only — imports all sections
│   └── globals.css         # Brand tokens + shared utilities only
│
├── components/             # 13 components — each fully isolated
│   ├── Navbar/             # Fixed nav, mobile hamburger, scroll shadow
│   ├── Hero/               # Image slider + particle canvas + parallax
│   ├── Ticker/             # Scrolling product ticker
│   ├── Gallery/            # Mosaic image grid
│   ├── About/              # Two-column layout with feature highlights
│   ├── CEO/                # 6-photo slider (portrait + factory visits)
│   ├── Ambassador/         # Kwame Gyedu — 3-photo switcher + thumbnails
│   ├── Products/           # 2 categories × 4 products (P.O.P Soap + Plaster)
│   ├── WhyUs/              # 6-card dark section
│   ├── Services/           # 4 services grid
│   ├── Testimonials/       # 3 client review cards
│   ├── Contact/            # Info panel + quote request form
│   ├── Footer/             # 4-column grid + newsletter
│   └── WhatsAppBtn/        # Fixed floating WhatsApp button
│
├── hooks/
│   ├── useSlider.js        # Slider logic — interval, goTo, next, prev
│   └── useParticles.js     # Canvas particle system — sparkles, streaks, orbs
│
├── lib/
│   └── constants.js        # ALL site data in one place
│                           # (nav, hero, products, CEO, ambassador, testimonials…)
│
└── public/
    └── images/             # All images as real files (not base64)
```

## Getting Started
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```
Or push to GitHub → import at vercel.com → auto-deploys on every push.

## Update Content
All content lives in **`lib/constants.js`** — edit there, components update automatically:
- `SITE` → phone, email, WhatsApp number, address
- `CEO_DATA.imgs` → add/remove CEO photos
- `AMBASSADOR_DATA` → ambassador details and photos
- `PRODUCT_CATEGORIES` → add new products or categories
- `TESTIMONIALS` → client reviews
- `NAV_LINKS` → navigation items

## Pending Client Updates
- [ ] Real phone number (currently placeholder)
- [ ] Real email address
- [ ] Social media links (Facebook, Instagram, Twitter)
- [ ] Final location/address details
