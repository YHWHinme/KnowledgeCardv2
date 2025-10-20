# Agent Guidelines for KnowledgeMapper

## Tech Stack
SvelteKit frontend + Tauri Rust backend + SQLite database

## Build Commands
- **Dev server**: `npm run dev`
- **Frontend build**: `npm run build`
- **Type check**: `npm run check` (strict mode enabled)
- **Tauri dev**: `npm run tauri dev`
- **Tauri build**: `npm run tauri build`

## Test Commands
- **Validation**: `npm run check` (TypeScript strict checks)
- **No unit tests configured** - use type checking for validation

## Code Style Guidelines

### TypeScript/JavaScript
- **Strict mode**: All code must pass TypeScript strict checks
- **Imports**: ES6 imports, external libs first, then internal ($lib/)
- **Naming**: camelCase vars/functions, PascalCase components/types
- **Types**: Explicit types always, prefer interfaces for objects

### Svelte
- **Structure**: Script → template → styles
- **Props**: TypeScript interfaces required
- **Styling**: Tailwind CSS classes only
- **Events**: Svelte event dispatcher for communication

### Rust (Tauri)
- **Error handling**: Result types with ? operator
- **Naming**: snake_case functions/vars, PascalCase structs/enums
- **Serialization**: Use serde with derive macros

### Database
- **Schema**: Descriptive names, CONSTRAINT foreign keys
- **Types**: TEXT, INTEGER, BOOLEAN SQLite types

### General
- **Security**: Never log sensitive data, validate inputs
- **Commits**: Conventional commit format