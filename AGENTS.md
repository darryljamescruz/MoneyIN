# MoneyIN - Agent Guidelines

This file provides instructions for AI agents working on the MoneyIN repository.

## Repository Structure

This repository follows a pnpm workspace monorepo structure as outlined in the engineering guide:

```
/apps
  /web          # React/TypeScript web application (Next.js)
/packages
  /domain       # Financial logic: money, splits, reconciliation, category/approval invariants
  /application  # Use cases and interfaces for external capabilities
  /contracts    # Runtime schemas, DTOs, shared error codes
  /server       # Auth, database, storage, bank and parser adapters
  /ui           # Shared React components and tokens
  /ai           # Server-only AI adapters, prompts, evaluation fixtures
  /config       # Shared lint/TypeScript/build configuration
/apps/worker    # Durable jobs (when separate job runtime is needed)
/docs
  /decisions    # Architecture decision records
  /runbooks     # Sync failures, retries, migrations, restores
  /agents       # Documentation and guidelines for AI agents working on this repository
```

*Note: While some teams prefer a simpler `/packages/frontend` and `/packages/backend` structure, this repository follows the more modular approach outlined in the monorepo engineering guide to better separate concerns as the project grows.*

## Dependency Rules

Enforce these boundaries:
- **Browser feature**: Can depend on contracts, browser-safe domain helpers, web UI components
- **API handler / worker entry point**: Can depend on application, contracts, and server adapters
- **Application**: Can depend on domain and its own defined ports; contracts when appropriate
- **Domain**: Only small runtime-neutral libraries; NO infrastructure, React, or environment access
- **Server / AI adapters**: Application ports, domain values, contracts where needed, provider SDKs
- **Contracts**: Only schema validation and serializable types; NO database or server dependencies

## Money and Database Practices

- Store USD amounts in cents (integer), with currency codes attached
- Use decimal arithmetic for fractional quantities and investment values
- Reconcile allocations and shares exactly using deterministic largest-remainder policy
- Give transactions stable internal IDs (provider event IDs are external references only)
- Use unique constraints, foreign keys, check constraints, atomic transactions, optimistic version checks
- Protect approved categories from provider refreshes (reprocessing creates draft proposals)

## API and Job Reliability

- Define runtime-validated inputs/outputs, stable error codes, pagination, bounded query ranges
- For jobs: implement idempotency, bounded retries with backoff, explicit timeout/failure states
- Acknowledge webhooks after durable receipt, then do work asynchronously
- Keep external providers behind small interfaces (BankConnectionProvider, ReceiptParser, CategorySuggester)
- Use typed errors and deterministic fixture adapters for development/demos

## Testing and CI

- **Domain tests**: Rounding, allocation sums, refunds, transfers, mixed categories, money bounds
- **Application tests**: Approval requirements, privacy policies, preserved overrides, job replay behavior
- **Database integration tests**: Real constraints, migrations, RLS/nonprivileged access, concurrency, atomic writes
- **Provider contract tests**: Normalized responses, webhook validation, malformed payloads, reconnection states
- **Browser E2E tests**: Scan/review/share flow, invitation, balances, cross-user privacy
- **AI evaluations**: Item extraction/category correctness, unsupported guesses, leakage, malicious text, latency, cost

## AI Layer Guidelines

When implementing AI capabilities:
1. Begin with narrow assistance rather than open-ended agency
2. AI adapter returns a typed **proposal**, never a financial write
3. Useful proposal fields: item ID, suggested category ID, rationale/evidence, confidence indicator, prompt/model version, validation status
4. Preserve original receipt amounts and reconcile in deterministic code
5. Reject invented category IDs and malformed output
6. Return unknown category or request review when evidence is insufficient
7. Use authorized SQL aggregates for exact spending questions
8. Version prompt templates and model configuration alongside evaluation fixtures
9. Gate changes on predefined acceptance criteria; measure reconciliation failures, category precision, etc.

## Security and Privacy

- HTTPS everywhere; encrypt secrets and private documents at rest
- Keep provider credentials and parser API keys on the server only
- Restrict signed document URLs by user authorization and short expiry
- Protect authentication and invitation endpoints against abuse
- Record consent and provide disconnect/deletion flows
- Keep financial and receipt contents out of analytics, error reports, and public demo telemetry

## Implementation Priorities

1. Start with one vertical slice: upload fixture receipt, review item categories, persist allocations, show exact spending total
2. Add household sharing with two-user authorization tests before real account data
3. Add sync/provider adapters and a worker when needed
4. Add AI proposals only after deterministic approval, privacy, and accounting paths work

## Key Technical Decisions from Requirements

- **Banking**: Use Plaid for Chase, Discover, Vanguard (verify production eligibility first)
- **Receipts**: Evaluate Amazon Textract AnalyzeExpense for header/line-item extraction
- **Auth/Storage**: Supabase Auth and private object storage as practical option
- **Database**: PostgreSQL with UUID primary keys and timestamps
- **Web Client**: React/TypeScript with Next.js as full-stack option
- **Demo**: Must use separate dataset/environment from private live data