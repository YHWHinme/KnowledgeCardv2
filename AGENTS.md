# Agent Guidelines for KnowledgeMapper

## Tech Stack
SvelteKit + Tauri + SQLite

## Commands
- **Dev**: `npm run dev` (frontend) / `npm run tauri dev` (full app)
- **Build**: `npm run build` (frontend) / `npm run tauri build` (full app)
- **Type check**: `npm run check` (strict mode, includes linting)
- **Rust**: `cargo check` / `cargo build` / `cargo test` (in src-tauri/)
- **Tests**: No tests configured yet (run single test: N/A)

## Code Style

### TypeScript/JavaScript
- Strict mode enabled, explicit types always, no `any` types
- Imports: ES6 style, external libs first, then `$lib/`, absolute paths
- Naming: camelCase vars/functions, PascalCase components/types/interfaces
- Error handling: try/catch with specific error types, avoid console.log for errors
- Async: async/await preferred, `Promise<T>` return types
- Strings: single quotes, trailing commas, consistent indentation

### Svelte
- Structure: script → template → styles
- Props: `export let` with explicit types, TypeScript interfaces required
- Styling: Tailwind CSS only, custom colors from tailwind.config.js
- Responsive: Tailwind prefixes (sm:, md:, lg:) for mobile-first
- Events: Svelte event dispatcher, no direct DOM manipulation

### Rust (Tauri)
- Error handling: `Result<T, E>` with `?` operator, custom error types
- Naming: snake_case functions/vars, PascalCase structs/enums
- Serialization: serde with derive macros, camelCase JSON fields
- Memory: explicit ownership, avoid `unwrap()` in production

### Database
- Schema: descriptive names, CONSTRAINT foreign keys, AUTOINCREMENT IDs
- Types: TEXT, INTEGER, BOOLEAN, NOT NULL constraints
- Queries: parameterized to prevent SQL injection

### General
- Security: never log sensitive data, validate all inputs, no hardcoded secrets
- Commits: conventional format (feat:, fix:, docs:, etc.)
