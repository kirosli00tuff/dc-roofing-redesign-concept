# DC Roofing Redesign — Design Direction

## Three Stylistic Approaches

### Theme Name: Pacific Shield Modernism

**Very Brief Intro:** A restrained West Coast architectural identity built from rain-darkened charcoal, cedar warmth, and crisp protective forms. It should feel established, technically capable, and calm under pressure.  
**Probability:** 0.041

### Theme Name: Roofline Field Notes

**Very Brief Intro:** An editorial, project-journal approach that treats every roof as a documented craft story, combining oversized photography, annotated details, and survey-style typography.  
**Probability:** 0.067

### Theme Name: Alpine Trade Signal

**Very Brief Intro:** A bolder industrial direction inspired by safety markings, topographic maps, and high-visibility field equipment, with more energy and operational intensity.  
**Probability:** 0.029

## Chosen Approach: Pacific Shield Modernism

### Design Movement

The redesign follows **Pacific Northwest regional modernism** filtered through contemporary architectural editorial design: honest materials, structural asymmetry, quiet utility, and strong visual protection cues.

### Core Principles

1. **Protection made visible:** Heavy roofline silhouettes, sheltering layers, and dark-to-light transitions should make weather protection tangible.
2. **Craft over decoration:** Details should resemble architectural drawings, material samples, and trade documentation rather than generic SaaS cards.
3. **West Coast specificity:** Rain, cedar, dark metal, mountain light, and regional housing forms anchor the design in Greater Vancouver.
4. **Established confidence:** The interface should never feel trendy or fragile; typography, spacing, and calls to action should communicate a company built on referrals since 1999.

### Color Philosophy

The palette begins with **storm-charcoal** and **warm cedar** because the company’s work exists where weather meets material. A pale mineral background creates legibility and calm, while a vivid lichen green is reserved for conversion actions and proof points. The design avoids evenly distributing color: charcoal carries authority, mineral white creates breathing room, and lichen appears only where action or assurance matters.

### Layout Paradigm

The page uses an **offset architectural-section layout** rather than a centered card grid. Headings align to a narrow left datum line while content extends in staggered horizontal bands. Photography breaks the main container edge, and section numbers, ruled annotations, and diagonal roofline cuts create continuity. Mobile layouts preserve the same hierarchy as a vertical field report rather than collapsing into generic stacked boxes.

### Signature Elements

1. **The Shelter Cut:** Angled charcoal panels with a shallow roof-pitch edge that appears in the hero, section transitions, and footer.
2. **Copper Survey Line:** Thin cedar-orange rules with small coordinate-like labels used to organize proof points and service categories.
3. **Material Spec Tags:** Compact uppercase labels that feel like construction-document annotations, used sparingly for warranties, service areas, and project types.

### Interaction Philosophy

Interactions should feel like well-fitted hardware: immediate, precise, and durable. Buttons compress slightly on press; links reveal a short survey line; service groups expand without bounce. The mobile navigation opens as a solid, sheltering panel rather than a translucent floating sheet.

### Animation

Page entry uses a restrained 50–70 ms stagger: the eyebrow and main headline rise 12 px while the hero image reveals through a diagonal clip. Section content fades and translates no more than 16 px when it first enters view. Hover states are limited to line growth, 2–4 px image lift, and subtle contrast changes, all under 240 ms with a strong ease-out. No continuous decorative motion is allowed. All nonessential effects stop under `prefers-reduced-motion`.

### Typography System

**Display:** `Archivo Black` for structural headlines, mostly uppercase or short title case with tight tracking.  
**Body:** `Manrope` for readable service copy, forms, and navigation.  
**Technical labels:** `IBM Plex Mono` for annotations, section numbers, and spec tags.

The hero headline should use a fluid 3.2–6.8 rem scale, compact line height, and controlled maximum width. Section headings should be 2–4 rem, body copy 1–1.125 rem, and technical labels 0.7–0.78 rem with generous letter spacing.

### Brand Essence

**Positioning:** A dependable Surrey roofing team for homeowners and strata decision-makers who want West Coast expertise, straightforward guidance, and work built to endure.  
**Personality:** Grounded, meticulous, protective.

### Brand Voice

Headlines are plainspoken and decisive. Calls to action describe the next concrete step. Microcopy removes uncertainty without overpromising.

**Example headline:** “Built for the weather. Backed by the work.”  
**Example CTA:** “Plan your roof assessment.”

### Wordmark & Logo

The concept mark is a bold, text-free **interlocking D/C roof shield**: two angular planes form a protective overhang and a subtle house aperture. The symbol should work in one colour, remain legible at favicon size, and pair with a custom-spaced “DC ROOFING” wordmark rendered in the display type rather than reproducing the current logo.

### Signature Brand Color

**Roof Lichen — `#9FBE3B`**. This sharp yellow-green recalls moss and new growth against rain-dark roofing. It is distinctive in the local category and reserved for active states, estimates, and proof—not used as a broad background wash.

## Implementation Guardrails

- The live preview must identify itself as an independent redesign concept, not DC Roofing’s official website.
- Never invent testimonials, ratings, project counts, or performance claims.
- Use only facts verified from the company’s public pages and phrase certifications, guarantees, and insurance as company-published claims.
- Preserve high contrast against every photographic background.
- Do not dilute the architectural datum line, roofline cuts, lichen accent discipline, or three-font hierarchy.

## Style Decisions

- Roof Lichen `#9FBE3B` will appear only on primary actions, proof numerals, assurance tags, and small active-state details—not as a broad headline fill or decorative full-width strip.
- The Shelter Cut will become a recurring shallow roof-pitch silhouette in the hero, one major section transition, image overlays, and the contact/footer close.
- The interlocking D/C roof-shield and custom-spaced `DC ROOFING` wordmark will remain clearly visible in the first screen, while the independent-concept notice stays visually secondary.
- Desktop and mobile compositions are structurally sound. The refinement pass should increase quiet technical annotations, strengthen roof-pitch geometry, and improve brand presence without changing the successful content flow.
