# Implementation Plan: THEZAR Editorial Redesign

## Overview

Transform the existing THEZAR frontend into a premium editorial cooking-competition website. All tasks are frontend-only — no backend, no API, no auth changes. The Christmas Events section (ChristmasEventsSection.jsx and christmas-events.css) must NEVER be touched.

Work is split into: global design system → component-by-component redesign → integration verification.

## Tasks

- [ ] 1. Global Design System (index.css)
  - Add `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap')` at the top of `frontend/src/index.css`
  - Add CSS custom properties: `--color-cream`, `--color-cream-light`, `--color-cream-dark`, `--color-burgundy`, `--color-burgundy-dark`, `--color-chocolate`, `--color-peach`, `--color-pink-muted`, `--color-green-accent`, `--color-gold`, `--font-display`
  - Update `body` background to `#FAF7F2` and `color` to `#2C1810`
  - Add `.fade-up` keyframe animation class
  - Add `.editorial-number` class (Playfair Display, clamp(5rem,10vw,9rem), opacity 0.08)
  - Keep ALL existing CSS classes unchanged
  - _Requirements: 1.1–1.6_

- [ ] 2. Navbar Redesign
  - Rewrite `frontend/src/Component/Navbar/Navbar.jsx` visual layer
  - Desktop: transparent → cream+blur(`backdrop-filter: blur(16px)`) on scroll; burgundy Register pill
  - Mobile: full-screen cream overlay with Playfair Display large nav links, smooth slide animation
  - Keep ALL existing: `scrollToSection`, `activeSection` tracking, `onOpenRegister`, `navLinks` array, `useEffect` scroll listener
  - _Requirements: 2.1–2.7_

- [ ] 3. Hero Section Redesign
  - Rewrite `frontend/src/Component/Home/Hero.jsx` visual layer
  - Cream background (#FAF7F2), asymmetric 2-col layout
  - Main heading: "THE TASTE OF TAMIL NADU" in Playfair Display
  - Young_woman.png in organic rounded frame (large border-radius)
  - Keep countdown timer logic exactly as-is (calculateTimeLeft, setInterval)
  - Add floating "38 DISTRICTS" and "ONE CULINARY JOURNEY" badge labels
  - Remove dark navy background and wave SVG
  - _Requirements: 3.1–3.8_

- [ ] 4. NewsTickerBar Redesign (Marquee)
  - Rewrite `frontend/src/Component/Home/NewsTickerBar.jsx`
  - Dark variant: burgundy/dark background with cream text
  - Updated marquee text: "THEZAR 2026 • 38 DISTRICTS • ONE TABLE • ONE TASTE • GRAND COOKING CHAMPIONSHIP •"
  - Keep pure CSS animation (no JS marquee), infinite loop, hover pause
  - _Requirements: 4.1–4.5_

- [ ] 5. About Section Redesign
  - Rewrite `frontend/src/Component/Home/AboutTheZarSection.jsx` visual layer
  - Heading: "WHERE EVERY DISTRICT HAS A FLAVOUR" in Playfair Display
  - Asymmetric layout: image right, editorial text left
  - Metadata labels: "01 ABOUT THEZAR", "38 DISTRICTS", "1 GRAND WINNER"
  - Keep `onOpenRegister`, `about_audience.jpg`, `isPlaying` state
  - _Requirements: 5.1–5.6_

- [ ] 6. Events Section Redesign
  - Rewrite `frontend/src/Component/Events/EventsGrid.jsx` visual layer
  - Heading: "THE EVENT" in Playfair Display
  - Editorial cards: large images, number labels (01–04), organic rounded corners (≥ 1.5rem), hover zoom + lift
  - Asymmetric grid: first card wider on desktop
  - Keep ALL: `EVENTS_LIST` data, `onSelectEvent`, `onOpenRegister`, modal trigger
  - _Requirements: 6.1–6.7_

- [ ] 7. Districts Section Redesign
  - Restyle `frontend/src/Component/Home/DistrictJourneySection.jsx` container and info card
  - Heading: "38 DISTRICTS. ONE TABLE." in Playfair Display
  - Map container: cream/white bg, 1.5rem border-radius, thin burgundy border
  - Selected district card: Playfair Display district name, editorial metadata labels
  - DO NOT TOUCH: `HTML5CanvasMap`, canvas rendering logic, `MAP_PINS_COORDINATES`, animation loop
  - Keep ALL: `DISTRICTS_DATA`, dropdown selector, `onOpenRegister`
  - _Requirements: 7.1–7.6_

- [ ] 8. HowItWorks Section Redesign
  - Rewrite `frontend/src/Component/Home/HowItWorksSection.jsx` visual layer
  - Oversized editorial step numbers "01", "02", "03" in Playfair Display (≥ 5rem), muted burgundy color
  - Generous whitespace between steps
  - Keep: all 3 steps array, `onOpenRegister`, `contestantImg`
  - _Requirements: 8.1–8.4_

- [ ] 9. Leaderboard Section Redesign
  - Rewrite `frontend/src/Component/Home/LeaderboardSection.jsx` visual layer
  - 1st place card dominant and larger; gold (#B8963E) editorial accents
  - Cream/warm section background
  - Playfair Display section heading
  - Keep: all podium data, `topThree`, `tableData`, avatar images, tab state
  - _Requirements: 9.1–9.5_

- [ ] 10. Contact Section Heading (Home.jsx)
  - In `frontend/src/Pages/Home.jsx`, update the contact section heading to: "LET'S COOK SOMETHING MEMORABLE." in Playfair Display
  - Update section background from `bg-[#071426]` to `bg-[#6B1A1A]`
  - Keep ALL: `ContactInfoSection`, `ContactFormSection`, `FaqSection` components unchanged
  - _Requirements: 10.1–10.4_

- [ ] 11. Footer Redesign
  - Rewrite `frontend/src/Component/Footer/Footer.jsx` visual layer
  - Background: dark chocolate (#2C1810)
  - Oversized "THEZAR" watermark text in Playfair Display (clamp(5rem,12vw,12rem), opacity ~0.06)
  - Mini inline marquee: "THEZAR • 38 DISTRICTS • ONE CULINARY JOURNEY •"
  - Keep: all nav links, contact info, copyright, `onOpenRegister`, `scrollToTop`
  - _Requirements: 11.1–11.5_

- [ ] 12. MobileApp Section Redesign
  - Update `frontend/src/Component/Home/MobileAppSection.jsx` background to cream
  - Add Playfair Display heading
  - Keep ALL: phone mockups, `QRCodeSVG`, download buttons, all existing content
  - _Requirements: 12.1–12.3_

- [ ] 13. CTA Section Redesign
  - Rewrite `frontend/src/Component/Home/CtaSection.jsx` visual layer
  - Burgundy full-width background, Playfair Display heading, cream/white button
  - Keep `onOpenRegister`
  - _Requirements: 13.1–13.3_

- [ ] 14. CategoryGridSection Redesign
  - Update `frontend/src/Component/Home/CategoryGridSection.jsx` to use cream/editorial styling
  - Playfair Display heading, editorial cards with warm palette
  - Keep all existing functionality and `onOpenRegister`

- [ ] 15. CountdownSection Redesign
  - Update `frontend/src/Component/Home/CountdownSection.jsx` to cream/editorial palette
  - Keep all existing countdown logic and `onOpenRegister`

- [ ] 16. Build Verification
  - Run `npm run build` inside `frontend/`
  - Fix any import errors, missing props, or JSX syntax issues
  - Run `npm test` to confirm Christmas Events tests still pass (23 tests)
  - Verify no console errors related to existing functionality
  - _Requirements: 15.1–15.4, 14.1–14.6_

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"] },
    { "id": 2, "tasks": ["16"] }
  ]
}
```

## Notes

- Tasks 2–15 are all independent of each other — they touch different files
- Task 1 (index.css) must be done first as all components depend on the CSS variables
- Task 16 is the final verification checkpoint
- NEVER modify: ChristmasEventsSection.jsx, christmas-events.css, mockData.js, any backend file
- NEVER remove: onOpenRegister, onSelectEvent, scrollToSection, countdown timer, canvas map logic, QR codes
- Each task should preserve all JSX structure/props and only change visual classes/styles
