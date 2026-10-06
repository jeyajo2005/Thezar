# Design Document: THEZAR Editorial Redesign

## Overview

Transform the THEZAR frontend from a dark-navy SaaS-style layout into a premium editorial cooking-competition website. The visual language is inspired by luxury food magazines — warm cream backgrounds, deep burgundy typography, Playfair Display serif headings, organic rounded image frames, and asymmetric editorial grid compositions. All existing functionality is preserved.

## Architecture

```
index.css          → New CSS variables, Playfair Display import, fade-up animation, body cream background
Navbar.jsx         → Cream-blur sticky nav, full-screen mobile overlay
Hero.jsx           → Asymmetric editorial hero, cream bg, organic image frame
NewsTickerBar.jsx  → Two-variant premium marquee
AboutTheZarSection.jsx → Editorial story layout
EventsGrid.jsx     → Asymmetric editorial event cards
DistrictJourneySection.jsx → Restyled container + editorial info card, map preserved
HowItWorksSection.jsx → Large-number editorial timeline
LeaderboardSection.jsx → Editorial winner podium
Home.jsx           → Contact section heading update
Footer.jsx         → Oversized THEZAR typography + mini marquee
MobileAppSection.jsx → Cream background
CtaSection.jsx     → Full-width burgundy editorial CTA
```

## Color System

```css
--color-cream:        #F5F0E8  /* warm ivory — main section backgrounds */
--color-cream-light:  #FAF7F2  /* lightest cream — body background */
--color-cream-dark:   #EDE5D8  /* deeper cream — cards, borders */
--color-burgundy:     #6B1A1A  /* deep wine — headings, CTAs */
--color-burgundy-dark:#4A0F0F  /* darkest burgundy — hover states */
--color-chocolate:    #2C1810  /* dark chocolate — body text */
--color-peach:        #F2C4A0  /* soft peach — supporting accents */
--color-pink-muted:   #E8B4B8  /* muted pink — decorative */
--color-green-accent: #1A3D2B  /* dark green — small accents */
--color-gold:         #B8963E  /* warm gold — winner highlights */
```

## Typography Scale

```
Display (h1 hero):    Playfair Display, 700, clamp(3.5rem, 8vw, 7rem)
Section heading (h2): Playfair Display, 700, clamp(2.5rem, 5vw, 4.5rem)
Sub heading (h3):     Playfair Display, 600, clamp(1.5rem, 3vw, 2.5rem)
Eyebrow labels:       Plus Jakarta Sans, 700, 0.7rem, uppercase, letter-spacing 0.15em
Body text:            Plus Jakarta Sans, 400, 1rem, line-height 1.7
Card title:           Plus Jakarta Sans, 800, 1.1rem
Numbers (editorial):  Playfair Display, 700, clamp(4rem, 8vw, 8rem), color: var(--color-cream-dark)
```

## Section-by-Section Design

### 1. index.css Changes
- Add `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap')` at top
- Add all CSS variables above
- Change `body` background to `var(--color-cream-light)`, color to `var(--color-chocolate)`
- Add `.fade-up` keyframe animation
- Add `.editorial-number` class for oversized Playfair Display numbers
- Keep all existing `.decorative-maroon-line`, `.nav-link-clean`, and other utility classes

### 2. Navbar
```
Desktop:
- background: transparent → rgba(250,247,242,0.95) + blur(16px) on scroll
- border-bottom: 1px solid rgba(107,26,26,0.1) on scroll
- Logo: thezar_logo.png + "THEZAR 2026" text (same as now)
- Nav links: chocolate text, burgundy underline on active
- Register pill: bg #6B1A1A, text #FAF7F2, border-radius 9999px

Mobile:
- Hamburger opens full-screen cream overlay
- Nav links: Playfair Display, 2.5rem, chocolate color, centered
- Close button top-right
- Register button at bottom of overlay
```

### 3. Hero
```
Layout: 2-column asymmetric
Left (60%): 
  - Small eyebrow: "THEZAR 2026" in uppercase mono
  - Heading: "THE TASTE OF TAMIL NADU" in Playfair Display, clamp(3.5rem,8vw,7rem), burgundy
  - Subheading: "STATEWIDE CULINARY CHAMPIONSHIP"
  - Floating badges: "38 DISTRICTS" pill + "ONE CULINARY JOURNEY" pill
  - Countdown timer: cream pill with chocolate numbers
  - CTAs: burgundy pill + outline pill

Right (40%):
  - Young_woman.png in organic rounded frame
  - border-radius: 38% 62% 58% 42% / 46% 42% 58% 54%
  - Subtle cream shadow underneath
  - Small floating label "THEZAR 2026" rotated on the image

Background: --color-cream-light (#FAF7F2)
Remove: dark navy background, wave SVG at bottom
```

### 4. NewsTickerBar (Marquee)
```
Dark variant (used between Hero → About):
  background: #4A0F0F
  text: #FAF7F2
  separator: • 
  
Light variant (used elsewhere):
  background: #F5F0E8
  text: #6B1A1A
  border-top/bottom: 1px solid rgba(107,26,26,0.15)

Content: THEZAR 2026 • 38 DISTRICTS • ONE TABLE • ONE TASTE • GRAND COOKING CHAMPIONSHIP • TAMIL NADU
Animation: pure CSS @keyframes marquee, 30s linear infinite, pauses on hover
```

### 5. About Section
```
Background: #FAF7F2
Layout: asymmetric 2-column

Left (45%):
  - Small label: "01 — ABOUT THEZAR"
  - Heading: "WHERE EVERY DISTRICT HAS A FLAVOUR" in Playfair Display
  - Story paragraph
  - Editorial metadata row: "38 DISTRICTS | 1 GRAND WINNER | 3 WINNING POSITIONS"
  - CTA buttons

Right (55%):
  - about_audience.jpg in large rounded card (border-radius 1.5rem)
  - Floating editorial number "01" in oversized light color
  - Small caption badge on image
```

### 6. Events Section
```
Background: #F5F0E8
Heading: "THE EVENT" in Playfair Display, large

Card design:
  - border-radius: 1.5rem
  - Large image (60% of card height)
  - Number label: "01" in Playfair Display, muted color
  - Category label: uppercase, 0.65rem
  - Title: Plus Jakarta Sans, 800
  - Hover: translateY(-8px) + scale(1.08) on image
  - Thin cream border

Grid: 
  Desktop: first card wide (col-span-2), rest 1-col = asymmetric
  Mobile: single column stack
```

### 7. Districts Section
```
Background: #F5F0E8
Heading: "38 DISTRICTS. ONE TABLE." in Playfair Display

Map container: 
  - background: white
  - border-radius: 1.5rem
  - border: 1px solid rgba(107,26,26,0.15)
  - shadow: subtle warm

Selected district card:
  - Playfair Display for district name (large)
  - Uppercase labels for metadata
  - Burgundy left border accent
  - Cream background
```

### 8. HowItWorks
```
Background: white or #FAF7F2
Layout: vertical with large editorial numbers

Each step:
  - Oversized number "01" in Playfair Display, clamp(5rem,10vw,9rem), color: rgba(107,26,26,0.12)
  - Step title in Plus Jakarta Sans, 800
  - Description text
  - Thin dividing line between steps
```

### 9. Leaderboard
```
Background: #F5F0E8
Heading: "THEZAR LEADERBOARD" in Playfair Display

Top 3 podium:
  - 1st place: large card, gold border (#B8963E), cream background, prominent avatar
  - 2nd/3rd: smaller cards beside
  - Gold/silver/bronze editorial color treatment

Table rows: cream background with thin chocolate borders
```

### 10. Contact Section (in Home.jsx)
```
Background: #6B1A1A (burgundy)
Heading: "LET'S COOK SOMETHING MEMORABLE." in Playfair Display, white, clamp(2.5rem,5vw,4rem)
Form inputs: cream/warm border on burgundy background
Text: cream/white
```

### 11. Footer
```
Background: #2C1810 (dark chocolate)
Hero text: "THEZAR" in Playfair Display, clamp(6rem,15vw,14rem), color: rgba(245,240,232,0.06) — watermark effect
Mini marquee: "THEZAR • 38 DISTRICTS • ONE CULINARY JOURNEY •" in cream text
Nav links: cream/warm color
Copyright: muted cream
```

### 12. MobileApp Section
```
Background: #FAF7F2 (cream)
Heading: Playfair Display
Card container: white with thin warm border
All existing phone mockups and QR codes preserved
```

### 13. CTA Section
```
Background: #6B1A1A
Heading: Playfair Display, cream text, large
Button: cream background, chocolate text (inverted)
```

## Animation System

```css
/* Fade-up scroll reveal */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up {
  animation: fadeUp 0.6s ease forwards;
}
.fade-up-delay-1 { animation-delay: 0.1s; }
.fade-up-delay-2 { animation-delay: 0.2s; }
.fade-up-delay-3 { animation-delay: 0.3s; }

/* Marquee */
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## Correctness Properties

Property 1: Palette consistency — All redesigned sections use only the defined color system variables. No dark-navy (#071426) appears outside ChristmasEventsSection and the existing countdown/modals.

Property 2: Typography hierarchy — All major section headings use Playfair Display. Body text and labels use Plus Jakarta Sans.

Property 3: ChristmasEventsSection immutability — ChristmasEventsSection.jsx and christmas-events.css are byte-for-byte identical before and after redesign.

Property 4: Functionality preservation — All onOpenRegister, onSelectEvent, scrollToSection, countdown timer, canvas map, QR codes, and leaderboard data remain fully functional.

Property 5: Responsive safety — No section causes horizontal overflow on viewports 360px–1440px+ (except the intentional marquee).

Property 6: Build success — `npm run build` inside frontend/ completes with zero errors after all changes.
