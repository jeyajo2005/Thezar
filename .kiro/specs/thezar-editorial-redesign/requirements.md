# Requirements Document

## Introduction

This document defines requirements for the complete frontend UI/UX redesign of the THEZAR cooking competition website. The goal is to transform the existing dark-navy SaaS-looking frontend into a visually stunning editorial, premium cooking-competition website inspired by the visual language of luxury food magazines and modern restaurant websites (reference: madie.es). All existing functionality, data, routes, and the Christmas Events section are preserved unchanged.

## Glossary

- **Editorial layout**: Asymmetric, magazine-style composition with large typography, generous whitespace, and varied element sizing
- **Cream palette**: Warm ivory/cream backgrounds (#F5F0E8, #FAF7F2) replacing current dark-navy backgrounds
- **Burgundy accent**: Deep wine/burgundy (#6B1A1A, #8B2020) used for headings, accents, and CTAs
- **Chocolate text**: Dark chocolate (#2C1810) for body text replacing slate-900
- **Playfair Display**: Serif display font for major headings, loaded from Google Fonts
- **Plus Jakarta Sans**: Existing body/UI sans-serif font, already installed
- **ChristmasEventsSection**: The existing Christmas events component — must NOT be modified in any way
- **mockData.js**: Existing data file — must NOT be modified

---

## Requirements

### Requirement 1: Global Design System

**User Story:** As a site visitor, I want the entire website to feel like a premium food magazine, so that THEZAR communicates quality and excitement from first glance.

#### Acceptance Criteria

1. THE `index.css` SHALL import Playfair Display from Google Fonts via `@import url(...)`.
2. THE `:root` CSS variables SHALL include `--color-cream: #F5F0E8`, `--color-cream-light: #FAF7F2`, `--color-burgundy: #6B1A1A`, `--color-burgundy-dark: #4A0F0F`, `--color-chocolate: #2C1810`, `--color-peach: #F2C4A0`, `--color-pink-muted: #E8B4B8`, `--color-green-accent: #1A3D2B`, `--font-display: 'Playfair Display', Georgia, serif`.
3. THE `body` background SHALL be updated to `var(--color-cream-light)` and text color to `var(--color-chocolate)`.
4. A `.fade-up` CSS animation class SHALL exist that transitions `opacity: 0, translateY(30px)` → `opacity: 1, translateY(0)` over 0.6s ease.
5. A `.editorial-section` CSS class SHALL provide generous vertical padding (`padding: 6rem 0`) and cream background.
6. WHEN `prefers-reduced-motion` is active, THE `.fade-up` animation SHALL be disabled.

---

### Requirement 2: Navbar Redesign

**User Story:** As a site visitor, I want a minimal, premium navbar that feels transparent on the hero and becomes cream-blur on scroll, so navigation feels editorial and clean.

#### Acceptance Criteria

1. THE `Navbar.jsx` SHALL render with a transparent/cream background when `scrolled === false` and a `backdrop-filter: blur(16px)` cream background when `scrolled === true`.
2. THE THEZAR logo SHALL remain on the left with the existing `thezar_logo.png` and brand text.
3. THE desktop nav links (Home, Events, Districts, About TheZar, Contact) SHALL remain functional with existing `scrollToSection` logic.
4. THE "REGISTER NOW" button SHALL be styled as a premium pill with burgundy background (`#6B1A1A`) and cream text.
5. THE mobile menu SHALL open as a full-screen overlay with large typography (font-size ≥ 2rem for nav links) and smooth slide-in animation.
6. THE mobile overlay SHALL have a cream background with chocolate text and a visible close button.
7. ALL existing `scrollToSection`, `activeSection`, and `onOpenRegister` functionality SHALL be preserved.

---

### Requirement 3: Hero Section Redesign

**User Story:** As a site visitor, I want a WOW-level asymmetric editorial hero, so the first impression communicates THEZAR as a premium national competition.

#### Acceptance Criteria

1. THE `Hero.jsx` background SHALL be warm cream (`#FAF7F2`) instead of dark navy.
2. THE hero layout SHALL be asymmetric: large serif heading occupies left/center, `Young_woman.png` in an organic rounded frame on the right.
3. THE main heading SHALL use Playfair Display serif font and read "THE TASTE OF TAMIL NADU" at a size of `clamp(3.5rem, 8vw, 7rem)`.
4. THE existing countdown timer SHALL be preserved and styled with cream/burgundy editorial pill design.
5. THE section SHALL display floating labels "38 DISTRICTS" and "ONE CULINARY JOURNEY" with small uppercase typography.
6. THE hero CTA buttons SHALL use burgundy pill styling.
7. THE image frame for `Young_woman.png` SHALL have `border-radius: 40% 60% 55% 45% / 45% 40% 60% 55%` organic shape or large-radius rounded card (≥ 2rem border-radius).
8. THE wave divider at the bottom SHALL be removed or replaced with a thin cream-to-white transition.

---

### Requirement 4: Marquee / Ticker Redesign

**User Story:** As a site visitor, I want a premium moving marquee between Hero and About, so the page has visual momentum and communicates key facts.

#### Acceptance Criteria

1. THE `NewsTickerBar.jsx` SHALL be redesigned with two visual variants available via CSS classes: dark variant (burgundy/dark bg + cream text) and light variant (cream bg + burgundy text).
2. THE marquee content SHALL include: "THEZAR 2026 • 38 DISTRICTS • ONE TABLE • ONE TASTE • GRAND COOKING CHAMPIONSHIP • TAMIL NADU".
3. THE animation SHALL remain pure CSS (`@keyframes`) — no JavaScript for movement.
4. THE animation SHALL be smooth and infinite, pausing on hover.
5. THE marquee SHALL be placed between the Hero and the About section in `Home.jsx`.

---

### Requirement 5: About Section Redesign

**User Story:** As a site visitor, I want an editorial story-style About section, so THEZAR's mission feels authentic and magazine-quality.

#### Acceptance Criteria

1. THE `AboutTheZarSection.jsx` heading SHALL read "WHERE EVERY DISTRICT HAS A FLAVOUR" in Playfair Display serif, size `clamp(2.5rem, 5vw, 4.5rem)`.
2. THE layout SHALL be asymmetric: large image/video on one side, editorial text on the other.
3. THE section SHALL display small editorial metadata labels: "01 ABOUT THEZAR", "38 DISTRICTS", "1 GRAND WINNER", "3 WINNING POSITIONS".
4. THE section background SHALL be cream (#FAF7F2).
5. ALL existing `onOpenRegister` functionality SHALL be preserved.
6. THE `about_audience.jpg` image SHALL remain in use.

---

### Requirement 6: Events Section Redesign

**User Story:** As a site visitor, I want premium editorial event cards, so each event feels like part of a luxury food magazine layout.

#### Acceptance Criteria

1. THE `EventsGrid.jsx` heading SHALL read "THE EVENT" in Playfair Display serif.
2. EACH event card SHALL have organic rounded corners (border-radius ≥ 1.5rem), large image, number label (01, 02, 03, 04), small category label.
3. THE cards grid SHALL use an asymmetric layout — cards may have different heights or widths to break the grid monotony.
4. WHEN a user hovers over a card, THE image SHALL zoom to `scale(1.08)` and the card SHALL lift by `translateY(-8px)`.
5. ALL existing `onSelectEvent` and `onOpenRegister` props SHALL be preserved.
6. ALL existing event data from `EVENTS_LIST` in `mockData.js` SHALL be used.
7. THE section background SHALL alternate between cream and a light warm tone.

---

### Requirement 7: Districts Section Redesign

**User Story:** As a site visitor, I want an editorial districts section, so the 38 districts feel like a premium food geography journey.

#### Acceptance Criteria

1. THE `DistrictJourneySection.jsx` heading SHALL read "38 DISTRICTS. ONE TABLE." in Playfair Display serif.
2. THE existing Canvas map (`HTML5CanvasMap`) SHALL be preserved with ALL its interactivity (click, hover, pulse, radar lines).
3. THE map container SHALL be restyled with cream background, organic rounded corners (border-radius ≥ 1.5rem), and a thin burgundy border.
4. THE selected district info card SHALL use editorial styling: large district name in Playfair Display, metadata in small uppercase labels.
5. THE section background SHALL be cream (#F5F0E8).
6. ALL `DISTRICTS_DATA` usage, dropdown selector, and `onOpenRegister` SHALL be preserved.

---

### Requirement 8: HowItWorks Section Redesign

**User Story:** As a site visitor, I want an editorial journey timeline, so the competition steps feel clear and premium.

#### Acceptance Criteria

1. THE `HowItWorksSection.jsx` SHALL display step numbers as oversized editorial numbers (e.g. "01", "02", "03") in Playfair Display at size ≥ 4rem.
2. THE layout SHALL feel editorial with generous whitespace between steps.
3. THE section background SHALL be white or cream.
4. ALL existing 3 steps and `onOpenRegister` SHALL be preserved.

---

### Requirement 9: Leaderboard Section Redesign

**User Story:** As a site visitor, I want an editorial winner showcase, so the leaderboard communicates achievement dramatically.

#### Acceptance Criteria

1. THE `LeaderboardSection.jsx` 1st place card SHALL be visually dominant — larger than 2nd and 3rd.
2. THE top 3 SHALL use gold, silver, and bronze editorial accents with cream/warm backgrounds.
3. THE section heading SHALL use Playfair Display with "THEZAR LEADERBOARD".
4. ALL existing avatar images (rank1_avatar.jpg, rank2_avatar.jpg, rank3_avatar.jpg) and data SHALL be preserved.
5. ALL existing table data and rankings functionality SHALL be preserved.

---

### Requirement 10: Contact Section Redesign

**User Story:** As a site visitor, I want a premium minimal contact section, so reaching THEZAR feels as polished as the rest of the site.

#### Acceptance Criteria

1. THE contact section heading in `Home.jsx` SHALL read "LET'S COOK SOMETHING MEMORABLE." in Playfair Display serif, size ≥ 3rem.
2. THE section background SHALL be burgundy (`#6B1A1A`) with cream/white text for contrast.
3. ALL existing `ContactInfoSection`, `ContactFormSection`, and `FaqSection` components SHALL be preserved.
4. THE contact form inputs SHALL be restyled with cream/warm border on dark background.

---

### Requirement 11: Footer Redesign

**User Story:** As a site visitor, I want a premium editorial footer, so the page ends with the same quality it starts with.

#### Acceptance Criteria

1. THE `Footer.jsx` SHALL display "THEZAR" in oversized Playfair Display typography (font-size ≥ 5rem) as a background watermark or hero text.
2. THE footer SHALL have a small inline marquee: "THEZAR • 38 DISTRICTS • ONE CULINARY JOURNEY •".
3. THE footer background SHALL be dark burgundy/chocolate (`#2C1810` or `#4A0F0F`).
4. ALL existing navigation links, contact info, and copyright SHALL be preserved.
5. ALL existing `onOpenRegister` functionality SHALL be preserved.

---

### Requirement 12: Mobile App Section Redesign

**User Story:** As a site visitor, I want the app section to feel editorial and premium, so downloading the app feels exciting.

#### Acceptance Criteria

1. THE `MobileAppSection.jsx` background SHALL be cream or soft warm white.
2. THE heading SHALL use Playfair Display.
3. ALL existing phone mockups, QR codes (`QRCodeSVG`), and download buttons SHALL be preserved with full functionality.

---

### Requirement 13: CTA Section Redesign

**User Story:** As a site visitor, I want a bold editorial full-width CTA, so the final push to register feels compelling.

#### Acceptance Criteria

1. THE `CtaSection.jsx` background SHALL be burgundy (`#6B1A1A`) with a large Playfair Display serif heading.
2. THE Register button SHALL use cream/white text on a dark background or inverse styling.
3. ALL existing `onOpenRegister` functionality SHALL be preserved.

---

### Requirement 14: Responsive Design

**User Story:** As a mobile user, I want all redesigned sections to be fully responsive, so the editorial quality holds on all screen sizes.

#### Acceptance Criteria

1. THE hero heading SHALL scale using `clamp()` from ≥ 2rem on 360px to ≥ 7rem on 1440px.
2. ALL editorial grids SHALL stack to single column on mobile (< 768px).
3. THE marquee SHALL have no horizontal overflow on any screen width.
4. THE navbar SHALL show the hamburger menu on screens < 768px.
5. THE district map SHALL maintain its aspect ratio on all screen sizes.
6. THE footer oversized typography SHALL scale with `clamp()` and not cause overflow.

---

### Requirement 15: Christmas Events Section Preservation

**User Story:** As a developer, I want the Christmas Events section to remain completely untouched, so the previously completed work is preserved.

#### Acceptance Criteria

1. THE `ChristmasEventsSection.jsx` file SHALL NOT be modified in any way.
2. THE `christmas-events.css` file SHALL NOT be modified in any way.
3. THE `ChristmasEventsSection` component SHALL remain in its exact position in `Home.jsx` (between CountdownSection and EventsGrid).
4. ALL 23 tests in the Christmas Events test suite SHALL continue to pass after the redesign.
