# Project: Premium Kerala × Tamil Nadu Digital Wedding Invitation

Act as a Senior UI/UX Designer and Senior React Frontend Developer.

Build a premium, modern, visually stunning and fully responsive digital wedding invitation website using **React.js and Tailwind CSS**.

I will provide a reference image generated from a UI design concept. Use that image as the primary visual reference for the website's aesthetic, layout, colors, decorative elements and overall experience.

**Important:** This is NOT a conventional wedding website. It should feel like an interactive, luxurious, digitally crafted physical wedding invitation card.

The website represents a wedding between:
- Groom: From Thrissur, Kerala.
- Bride: From Tamil Nadu.

The design should beautifully blend both cultures into one cohesive visual experience.

---

## 1. Overall Design Direction

Create an elegant fusion of Kerala and Tamil Nadu traditional wedding aesthetics with modern web design.

### Visual identity
- Premium and minimal.
- Elegant and romantic.
- Traditional Indian wedding aesthetics.
- Luxury invitation-card experience.
- Rich decorative details without making the UI congested.
- Beautiful typography and carefully balanced whitespace.

### Color palette
- Background: Warm ivory / cream (#F8F2E8).
- Primary: Forest green (#29452F).
- Secondary: Antique gold (#B38A45).
- Accent: Deep maroon (#713D43).
- Text: Dark brown / charcoal (#30251E).

Use gold primarily for borders, ornaments, icons and decorative illustrations.

### Typography
Use elegant typography:
- Headings: Cormorant Garamond or Playfair Display.
- Body: Lato or similar clean sans-serif.
- Couple names should have large, beautiful serif typography.
- Use appropriate letter spacing for invitation labels.

---

## 2. Important UX Requirement – No Navigation Bar

Do NOT create a conventional website header or navigation bar.

This is an invitation card experience, not a business website.

The entire website should behave like one beautifully designed, vertically scrolling invitation card.

Use decorative transitions and section separators instead of navbar navigation.

---

## 3. Opening Experience – Interactive Invitation Envelope

This is one of the most important features.

When the visitor first opens the website, display a full-screen invitation envelope experience.

### Initial screen
- Warm ivory or textured paper background.
- A beautifully designed closed wedding envelope in the centre.
- Gold embossed wedding emblem.
- Floral decorations with jasmine and subtle traditional motifs.
- Elegant text: "You Are Cordially Invited".
- Button/text: "Open Invitation".

### Opening animation

When the visitor clicks the envelope or Open Invitation:

1. The envelope flap should rotate open using a 3D CSS animation.
2. A wedding invitation card should slide upwards from inside the envelope.
3. Add a subtle golden glow.
4. Animate jasmine flower petals floating across the screen.
5. Reveal the couple's names and wedding date.
6. Transition smoothly into the main invitation page.

The animation should feel premium, smooth and realistic.

Do not make the opening animation unnecessarily long. Provide an option to skip or proceed immediately.

The opening animation should happen only once per page visit.

---

## 4. Main Invitation Hero Section

After opening the invitation, display a beautiful full-screen hero section.

Include:
- "Together with their families".
- Groom's name.
- Bride's name.
- Wedding date.
- Wedding location.
- Countdown timer.
- A subtle animated scroll indicator.

### Background design

Create a sophisticated Kerala × Tamil Nadu fusion illustration.

Kerala elements:
- Vadakkunnathan Temple-inspired architecture.
- Traditional Kerala nalukettu wooden architecture.
- Elephant with nettipattam.
- Coconut trees.
- Traditional nilavilakku.
- Kasavu-inspired decorative patterns.

Tamil Nadu elements:
- Traditional temple gopuram.
- Kolam-inspired patterns.
- Kanjeevaram silk-inspired borders.
- Traditional floral decorations.
- Brass lamps and temple-inspired ornamental details.

Blend both architectural and cultural elements naturally. Avoid making the design look like two unrelated halves.

Use decorative illustrations as supporting elements, not as distractions from the couple's names.

---

## 5. Our Story Section

Create an elegant couple introduction section.

Design:
- Large couple photograph inside an ornamental Indian arch-shaped frame.
- Beautiful heading: "Two Souls, One Beautiful Journey".
- Short introduction about the couple.
- A small timeline with important milestones.

Use scroll-triggered animations:
- Image reveals with a smooth mask transition.
- Text fades in with a slight upward movement.
- Decorative gold ornaments appear progressively.

Keep the section editorial and romantic.

---

## 6. Two Cultures, One Celebration

Create a dedicated section celebrating the union of Kerala and Tamil Nadu.

Suggested heading:

"Two Cultures. One Celebration."

Use traditional decorative illustrations:
- Kerala elephant and traditional temple architecture.
- Tamil Nadu temple gopuram.
- Jasmine flowers.
- Banana leaves.
- Kolam patterns.
- Kasavu and Kanjeevaram-inspired borders.

Use a premium illustrated composition with a short paragraph describing the beautiful union of two families and cultures.

Do not overload the section with too many illustrations.

---

## 7. Wedding Events Section

Create beautiful individual event cards.

Each card should contain:
- Event name.
- Date.
- Time.
- Venue.
- Small decorative icon.
- Relevant background photograph or illustration.

Example events:
- Muhurtham.
- Wedding Ceremony.
- Reception.

Use elegant borders and subtle gold accents.

Cards should reveal smoothly when the visitor scrolls down.

Make event information easy to read on mobile screens.

---

## 8. Wedding Venue Section

Create a visually rich venue section.

Include:
- Venue photograph.
- Venue name.
- Full address.
- Google Maps directions button.
- Date and time.

Use a sophisticated image-and-content layout.

---

## 9. Wedding Photo Gallery

Create a premium photo gallery.

Requirements:
- Asymmetric editorial grid layout.
- Different image sizes.
- Rounded or ornamental image frames.
- Smooth image reveal animations.
- Click-to-open lightbox.
- Previous and next image navigation.
- Smooth transitions between photos.

Use placeholder images initially, but make it easy to replace them with actual wedding photographs.

---

## 10. RSVP Section

Create a beautiful final invitation section.

Use a deep forest-green background with antique gold borders and traditional decorations.

Heading:
"We Would Love to Celebrate With You"

Include:
- Guest name.
- Number of guests.
- Attendance confirmation.
- Optional message.

Attendance options:
- Joyfully Accept.
- Maybe.
- Regretfully Decline.

Use elegant form styling and clear submission feedback.

---

## 11. Final Footer

Create a minimal, beautifully decorated closing section.

Suggested content:

"With Love and Blessings"

"Thank you for being a part of our special day."

Include the couple's initials and small decorative floral elements.

---

## 12. Animation and Interaction Requirements

The website should feel alive while scrolling, but animations must remain elegant and subtle.

Implement:

- 3D envelope opening animation.
- Floating jasmine petals.
- Smooth section reveal animations.
- Text fade-in and slide-up.
- Image mask reveals.
- Subtle parallax backgrounds.
- Decorative SVG illustrations.
- Hover animations for interactive elements.
- Smooth scrolling.
- Animated countdown timer.
- Gallery transitions.
- Elegant RSVP interaction.

Use Framer Motion (Motion for React) if available. CSS keyframes and Intersection Observer can be used where appropriate.

Avoid:
- Excessive animations.
- Unnecessary bouncing.
- Too many simultaneous moving elements.
- Distracting transitions.
- Heavy animations that negatively affect mobile performance.

Respect reduced-motion accessibility preferences.

---

## 13. Technical Requirements

Technology:
- React.js.
- Tailwind CSS.
- JavaScript or TypeScript, following the existing project setup.
- Framer Motion / Motion for React for animations if appropriate.
- Lucide React for icons if needed.

Implementation guidelines:

1. Build reusable React components for each major section.
2. Keep components organised and maintainable.
3. Use responsive layouts for desktop, tablet and mobile.
4. Follow mobile-first design principles.
5. Use semantic HTML.
6. Ensure good accessibility and keyboard navigation.
7. Optimise images and animations for performance.
8. Avoid unnecessary dependencies.
9. Do not use generic template-looking UI.
10. Use consistent spacing, typography and decorative elements throughout.

### Content configuration

Keep wedding information in a central configuration object so the client can easily update:

- Groom's name.
- Bride's name.
- Wedding date.
- Wedding time.
- Wedding venues.
- Event details.
- Family names.
- Gallery images.
- RSVP settings.

Use realistic sample content initially.

Do not hardcode wedding information across multiple components.

### Image handling

Use the supplied reference image as the visual direction.

Use suitable placeholder photographs for:
- Kerala temple architecture.
- Tamil Nadu temple architecture.
- Couple portraits.
- Jasmine flowers.
- Traditional lamps.
- Wedding decorations.

Do not use the reference collage itself as the website background.

The final website should consist of properly structured individual sections and visual elements.

---

## 14. Final Quality Expectations

The final result should look like a professionally designed luxury wedding invitation created by an experienced UI/UX design agency.

Prioritise the following:

1. First impression – the envelope-opening experience must be impressive.
2. Visual consistency – Kerala and Tamil Nadu cultures should blend naturally.
3. Typography – couple names and invitation details should look elegant.
4. Scroll experience – each section should reveal beautifully.
5. Mobile experience – the invitation should look especially beautiful on mobile devices.
6. Performance – animations should remain smooth and lightweight.

**Final instruction:**

Before implementing, analyse the supplied reference image carefully and use it to establish the visual direction.

Do not simplify the design into a generic landing page. Do not introduce a navbar, dashboard-style cards or conventional website layouts.

Build a cohesive, premium, interactive digital wedding invitation that feels like opening and exploring a beautifully handcrafted wedding card.