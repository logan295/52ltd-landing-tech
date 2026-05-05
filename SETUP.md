# 52 Limited Landing Page — Setup Guide

## Project Structure
```
52ltd-landing/
├── app/
│   ├── globals.css       ✅ All design tokens + base styles
│   ├── layout.tsx        ✅ Root layout + metadata
│   └── page.tsx          ✅ Home page (placeholder)
├── public/
│   ├── fonts/            ← DROP YOUR FONT FILES HERE
│   │   ├── CircularStd-Book.otf
│   │   ├── CircularStd-Bold.otf
│   │   ├── EamesCenturyModern-Regular.otf
│   │   └── EamesCenturyModern-Bold.otf
│   └── logos/            ← DROP YOUR LOGO FILES HERE
│       ├── circle/
│       │   ├── logo-circle-blue.png
│       │   ├── logo-circle-dark.png
│       │   └── logo-circle-white.png
│       ├── limited/
│       │   ├── logo-limited-blue.png
│       │   ├── logo-limited-dark.png
│       │   └── logo-limited-white.png
│       └── ltd/
│           ├── logo-ltd-blue.png
│           ├── logo-ltd-dark.png
│           └── logo-ltd-white.png
├── tailwind.config.ts    ✅ All brand tokens as Tailwind classes
└── package.json
```

## Step 1 — Add Fonts
Copy your OpenType font files from Desktop into:
```
public/fonts/
```
File names must match exactly as listed above.

## Step 2 — Add Logos
Copy logo PNGs from "52 Limited Logos " folder into:
```
public/logos/circle/    (Circle Logo 52 folder)
public/logos/limited/   (Limited folder)
public/logos/ltd/       (LTD folder)
```
Rename them to match the names in the structure above.

## Step 3 — Install & Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Step 4 — Deploy to Vercel
```bash
npx vercel
```

## Token Quick Reference

### Logo Usage by Section
| Section       | Logo to use                    |
|---------------|-------------------------------|
| Dark nav      | logo-limited-white.png        |
| Light section | logo-limited-dark.png         |
| Blue accent   | logo-limited-blue.png         |
| Favicon/icon  | logo-circle-dark.png          |

### Key CSS Classes
- `.section-dark`  — navy bg, white text, white icons
- `.section-alt`   — ice-blue bg
- `.section-light` — white bg, navy text
- `.container`     — centered, max 1200px
- `.btn-primary`   — blue CTA button
- `.btn-ghost`     — outline button for dark sections
- `.reveal`        — add for scroll animation
- `.reveal-stagger`— staggers children on scroll reveal

### Tailwind Color Classes
- `text-navy`, `bg-navy`
- `text-blue`, `bg-blue`, `bg-blue-light`
- `bg-ice-blue`
- `shadow-blue`, `shadow-navy`
- `font-sans` (CircularStd), `font-display` (EamesCenturyModern)
