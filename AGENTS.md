# Agent Guidelines for KnowledgeMapper

## Tech Stack
SvelteKit + Tauri + SQLite

## Commands
- **Dev**: `npm run dev` (frontend) / `npm run tauri dev` (full app)
- **Build**: `npm run build` (frontend) / `npm run tauri build` (full app)
- **Type check**: `npm run check` (strict mode - no tests configured)
- **Lint**: `npm run check` (includes type checking)
- **Rust**: `cargo check` / `cargo build` (in src-tauri/)

## Code Style

### TypeScript/JavaScript
- Strict mode enabled, explicit types always, no any types
- Imports: ES6, external libs first, then $lib/, absolute paths
- Naming: camelCase vars/functions, PascalCase components/types/interfaces
- Error handling: try/catch with specific error types, no console.log for errors
- Async: async/await preferred, Promise<T> return types

### Svelte
- Structure: script → template → styles
- Props: TypeScript interfaces required, export let with types
- Styling: Tailwind CSS only, custom colors from tailwind.config.js
- Responsive: Tailwind prefixes (sm:, md:, lg:) for mobile-first
- Events: Svelte event dispatcher, no direct DOM manipulation

### Rust (Tauri)
- Error handling: Result<T, E> with ? operator, custom error types
- Naming: snake_case functions/vars, PascalCase structs/enums
- Serialization: serde with derive macros, camelCase JSON fields
- Memory: explicit ownership, avoid unwrap() in production

### Database
- Schema: descriptive names, CONSTRAINT foreign keys, AUTOINCREMENT IDs
- Types: TEXT, INTEGER, BOOLEAN, NOT NULL constraints
- Queries: parameterized to prevent SQL injection

### General
- Security: never log sensitive data, validate all inputs, no hardcoded secrets
- Formatting: consistent indentation, trailing commas, single quotes for strings
- Commits: conventional format (feat:, fix:, docs:, etc.)
