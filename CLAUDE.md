# Team Just Respect Landing Page

## Project Overview
Next.js landing page for Team Just Respect AAU basketball program.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Development Commands
```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run lint   # Run ESLint
```

## Pre-Commit Checklist

**Before every commit, you MUST:**

1. **Run the linter**
   ```bash
   npm run lint
   ```
   Fix all errors before proceeding.

2. **Run code review**
   Run `/review2` to review staged changes. Evaluate the feedback:
   - **Real issues** (bugs, security, logic errors) → Fix before committing
   - **Non-issues** (style nitpicks, preferences) → OK to proceed

3. **Commit and push**
   After lint passes and review is acceptable, commit with a descriptive message and push.

## Workflow
- Commit and push after each completed task
- Keep commits focused and atomic

## ESLint Rules
Strict TypeScript configuration:
- Max complexity: 5
- No explicit `any`
- Explicit function return types required
- No unused variables
- Strict boolean expressions

## Color Palette
- Black: `#0a0a0a`
- Blue: `#1e40af`
- Orange: `#f97316`
- Dark Gray: `#1f1f1f`

## Environment Variables
```
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id_here
```
