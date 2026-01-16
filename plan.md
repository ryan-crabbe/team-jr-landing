# Team Just Respect - Landing Page Plan

## Overview
A Next.js landing page for Team Just Respect AAU basketball program.

**Theme:** Dark mode with blue, black, and orange color palette

**Pages:**
- Home (Landing)
- Calendar
- Team
- Contact Us / Register

---

## Epic 1: Project Setup & Foundation

### Task 1.1: Initialize Next.js Project
- [ ] Create Next.js app with TypeScript
- [ ] Set up Tailwind CSS
- [ ] Configure dark mode as default
- [ ] Define color palette (blue, black, orange)
- [ ] Set up folder structure (`/components`, `/app`, `/public`, `/lib`)

### Task 1.2: ESLint Configuration
- [ ] Set up ESLint with strict TypeScript rules
- [ ] Configure complexity rule (max: 5)
- [ ] Add strict type-checking rules:
  - `@typescript-eslint/no-explicit-any`
  - `@typescript-eslint/strict-boolean-expressions`
  - `@typescript-eslint/no-unused-vars` (error)
  - `@typescript-eslint/explicit-function-return-type`
- [ ] Add `lint` script to package.json

### Task 1.3: CLAUDE.md Setup
- [ ] Create CLAUDE.md with project instructions
- [ ] Include: "Run `npm run lint` before committing"
- [ ] Include: "Commit and push after each completed task"
- [ ] Include: "Run /review2 before committing - only proceed if issues are non-blocking"

### Task 1.4: Global Components
- [ ] Create placeholder logo component
- [ ] Create Header/Navigation component
  - Links: Home, Calendar, Team, Register
  - Mobile hamburger menu
- [ ] Create Footer component
  - Instagram link (@teamjustrespect)
  - Copyright text

### Task 1.5: Layout & Styling
- [ ] Set up global styles
- [ ] Configure fonts (pick a bold, athletic-style font)
- [ ] Create reusable button component (primary orange CTA style)

---

## Epic 2: Landing Page (Home)

### Task 2.1: Hero Section with Video Background
- [ ] Create video background container (looping, muted, autoplay)
- [ ] Add dark overlay for text readability
- [ ] Use placeholder video (abstract away actual content)
- [ ] Display "Team Just Respect" as main heading
- [ ] Add "Register" CTA button linking to /register (Contact Us page)

### Task 2.2: Header Overlay
- [ ] Position navigation overlay on top of video
- [ ] Ensure header is visible against video background
- [ ] Sticky/fixed header on scroll (optional enhancement)

---

## Epic 3: Calendar Page

### Task 3.1: Google Calendar Integration
- [ ] Create calendar page at `/calendar`
- [ ] Add Google Calendar embed component
- [ ] Use environment variable for Calendar ID: `NEXT_PUBLIC_GOOGLE_CALENDAR_ID`
- [ ] Style embed container to match site theme
- [ ] Add page heading and brief description

### Task 3.2: Calendar Configuration (Post-Development)
- [ ] Document how to get Google Calendar ID
- [ ] Document how to make calendar public for embedding

---

## Epic 4: Team Page

### Task 4.1: Team Grid Layout
- [ ] Create team page at `/team`
- [ ] Build responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- [ ] Create team member card component
  - Headshot placeholder
  - Name
  - Role (Director / Coach)
  - Clickable to profile page

### Task 4.2: Individual Profile Pages
- [ ] Create dynamic route `/team/[slug]`
- [ ] Profile page layout:
  - Large headshot
  - Name and role
  - Bio/blurb text
  - Back to team link

### Task 4.3: Team Data
- [ ] Create team data file with all members:

| Name | Role | Slug |
|------|------|------|
| Jimpee Saunders | Director | jimpee-saunders |
| Randy Masilang | Director | randy-masilang |
| Aba | Coach | aba |
| Justin | Coach | justin |
| Rock | Coach | rock |
| Jaden | Coach | jaden |
| Dar | Coach | dar |
| Henry | Coach | henry |
| Ryan | Coach | ryan |

- [ ] Add placeholder headshot images
- [ ] Add placeholder bio text for each member

---

## Epic 5: Contact Us / Register Page

### Task 5.1: Contact Page Layout
- [ ] Create page at `/register` (also accessible conceptually as Contact Us)
- [ ] Page heading: "Contact Us" or "Get In Touch"
- [ ] Subheading about registration/inquiries

### Task 5.2: Director Contact Cards
- [ ] Display 2 director contact cards:

**Director 1: Jimpee Saunders**
- Phone: [placeholder]
- Email: [placeholder]

**Director 2: Randy Masilang**
- Phone: [placeholder]
- Email: [placeholder]

### Task 5.3: Social Links
- [ ] Instagram link/icon: @teamjustrespect
- [ ] Link to: https://instagram.com/teamjustrespect

---

## Epic 6: Polish & Deployment Prep

### Task 6.1: Responsive Design QA
- [ ] Test all pages on mobile
- [ ] Test all pages on tablet
- [ ] Test all pages on desktop

### Task 6.2: SEO & Metadata
- [ ] Add page titles and meta descriptions
- [ ] Add Open Graph images (placeholder)
- [ ] Add favicon (placeholder)

### Task 6.3: Environment Variables Documentation
- [ ] Document required env vars:
  - `NEXT_PUBLIC_GOOGLE_CALENDAR_ID`
- [ ] Create `.env.example` file

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Calendar:** Google Calendar Embed
- **Linting:** ESLint with strict TypeScript rules

---

## Development Workflow

After completing each task:

1. **Lint** - Run `npm run lint` and fix any errors
2. **Review** - Run `/review2` via subagent
3. **Evaluate** - Subagent reviews feedback:
   - If issues are real bugs/problems → fix before committing
   - If issues are nitpicks/style preferences/non-issues → proceed
4. **Commit & Push** - Commit changes with descriptive message and push

---

## Color Palette

```css
/* Primary Colors */
--color-black: #0a0a0a;
--color-blue: #1e40af;       /* Deep blue */
--color-orange: #f97316;     /* Vibrant orange */

/* Supporting */
--color-dark-gray: #1f1f1f;  /* Card backgrounds */
--color-white: #ffffff;       /* Text */
--color-gray: #a1a1aa;        /* Secondary text */
```

---

## File Structure (Proposed)

```
team-jr-landing/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home/Landing page
│   ├── calendar/
│   │   └── page.tsx        # Calendar page
│   ├── team/
│   │   ├── page.tsx        # Team grid page
│   │   └── [slug]/
│   │       └── page.tsx    # Individual profile page
│   └── register/
│       └── page.tsx        # Contact/Register page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Button.tsx
│   ├── TeamCard.tsx
│   └── VideoBackground.tsx
├── lib/
│   └── team-data.ts        # Team member data
├── public/
│   ├── placeholder-logo.svg
│   ├── placeholder-video.mp4
│   └── headshots/
│       └── placeholder.jpg
├── .env.example
├── .eslintrc.json          # Strict TypeScript ESLint config
├── CLAUDE.md               # Claude Code instructions
└── tailwind.config.ts
```

---

## Notes

- Video file will need to be provided later (use placeholder for now)
- Headshots will need to be provided later (use placeholders for now)
- Google Calendar ID needs to be set up and added to env vars
- Director phone/email need to be filled in
- Bio text for each team member needs to be written
