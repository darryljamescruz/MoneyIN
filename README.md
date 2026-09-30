# MoneyIN

A personal finance tracker with household sharing capabilities.

## Project Structure

This repository follows a pnpm workspace monorepo structure:

```
/apps
  /web          # React/TypeScript web application (Next.js)
  /worker       # Durable jobs (when separate job runtime is needed)
/packages
  /domain       # Financial logic: money, splits, reconciliation, category/approval invariants
  /application  # Use cases and interfaces for external capabilities
  /contracts    # Runtime schemas, DTOs, shared error codes
  /server       # Auth, database, storage, bank and parser adapters
  /ui           # Shared React components and tokens
  /ai           # Server-only AI adapters, prompts, evaluation fixtures
  /config       # Shared lint/TypeScript/build configuration
/docs
  /decisions    # Architecture decision records
  /runbooks     # Sync failures, retries, migrations, restores
  /agents       # Documentation and guidelines for AI agents working on this repository
```

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm test` - Run tests across all packages
- `pnpm lint` - Run ESLint across all packages
- `pnpm clean` - Remove all build outputs

## Documentation

See the [docs/](./docs) directory for:
- Architecture decision records
- Operational runbooks
- AI agent guidelines

## Contributing

Please read [AGENTS.md](./AGENTS.md) for detailed guidelines for AI agents working on this repository.
