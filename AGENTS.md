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
- **TypeScript**: Strict mode, explicit types, no `any`, ES6 imports, camelCase vars/functions, PascalCase components
- **Svelte**: script→template→styles, `export let` props with types, Tailwind CSS only, Svelte event dispatcher
- **Rust**: `Result<T,E>` with `?`, snake_case vars, PascalCase structs, serde derive, explicit ownership
- **Database**: TEXT/INTEGER/BOOLEAN types, CONSTRAINT foreign keys, AUTOINCREMENT IDs, parameterized queries
- **General**: Single quotes, trailing commas, async/await, try/catch, no console.log, conventional commits
