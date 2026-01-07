# CLAUDE.md

## Project Overview

**Impostor** is a Spanish-language social deduction party game for 3-10 players. Players receive a secret word (category + word), except the impostor who only sees the category. Through rounds of giving word clues, the group tries to identify the impostor while the impostor tries to blend in.

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Persistence**: localStorage (works offline)

## Project Structure

```
src/
├── data/words.ts        # Categories and Spanish words
├── lib/gameState.ts     # Game logic and state management
├── layouts/Layout.astro # Main layout
├── pages/
│   ├── index.astro      # Home - add players
│   └── game.astro       # Game - all phases
└── styles/global.css    # Tailwind styles
```

## Game Phases

1. **Setup**: Add player names (3-10)
2. **Word Phase**: Pass device, each player sees their word (impostor sees only category)
3. **Discussion Phase**: Players give one-word clues related to the secret word
4. **Voting Phase**: Group discusses and votes who to expel
5. **Result**: Reveal if expelled player was the impostor

## Development Commands

```bash
pnpm install   # Install dependencies
pnpm dev       # Dev server
pnpm build     # Production build
pnpm preview   # Preview production build
```

## Current State

- Core game mechanics implemented
- Multiple rounds with scoreboard
- Spanish word categories
- Category selection before game start (collapsible UI with select all/none)

## Available Categories

- Defined in src/data/words.ts
