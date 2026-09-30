# Finance Tracker — Monorepo and Engineering Guide

**Status:** Proposed repository conventions  
**Updated:** September 29, 2026  
**Related:** UI requirements, technical requirements, and the accompanying starter `AGENTS.md`.

## 1. Recommendation

Use a **pnpm workspace** with one modular backend, a React/TypeScript web app, and an optional worker runtime. Share financial logic and validated API contracts so a later mobile app can reuse them. Introduce Turborepo when dependency-aware orchestration and caching are useful; workspace packages do not require separate deployable services.

Use the standard filename **`AGENTS.md`**. Keep it short enough for a coding agent to follow; put architecture rationale and detailed operational procedures in `docs/`. Add nested instructions only where a subtree genuinely needs additional rules (for example migrations or AI evaluations). Avoid maintaining duplicate copies of the same rules for different assistants.

## 2. Initial repository layout

| Path | Responsibility | Create when |
| --- | --- | --- |
| `apps/web` | Web UI, API entry points, composition root | First scaffold. |
| `packages/domain` | Money, splits, reconciliation, category and approval invariants | First finance feature. |
| `packages/application` | Use cases and interfaces for external capabilities | First server use case. |
| `packages/contracts` | Runtime schemas, DTOs, and shared error codes | First API feature. |
| `packages/server` | Auth, database, storage, bank and parser adapters | First server integration. |
| `apps/worker` | Durable jobs using the same application use cases | When a separate job runtime is needed. |
| `packages/ui` | Shared React components and tokens | When components are reused across browser apps; native mobile may need its own rendering components. |
| `packages/ai` | Server-only AI adapters, prompts, evaluation fixtures | When an AI capability is implemented. |
| `packages/config` | Shared lint/TypeScript/build configuration | When more than one package needs it. |
| `docs/decisions` | Short architecture decision records | For consequential choices. |
| `docs/runbooks` | Sync failures, retries, migrations, restores | As those features become operational. |

Keep `AGENTS.md`, `README.md`, `pnpm-workspace.yaml`, the root package manifest, and one lockfile at the repository root. Do not create speculative empty mobile, desktop, or microservice apps. The current desktop/phone experience is the responsive web app.

## 3. Allowed dependencies

| Consumer | Allowed dependencies |
| --- | --- |
| Browser feature | Contracts, browser-safe domain helpers, web UI components. |
| API handler / worker entry point | Application, contracts, and server adapters wired together. |
| Application | Domain and its own defined ports; contracts when appropriate for shared validated value shapes. |
| Domain | Small runtime-neutral libraries only; no infrastructure, React, or environment access. |
| Server / future AI adapters | Application ports, domain values, contracts where needed, provider SDKs. |
| Contracts | Schema validation and serializable types; no database or server dependencies. |

Keep route handlers thin: validate input, obtain the authenticated actor, call a use case, map the result. A use case handles policy and orchestration; repositories and provider adapters handle I/O. A financial calculation should work in a unit test without a database, web framework, or AI service.

Enforce these boundaries with package exports, explicit `workspace:*` dependencies, lint restrictions, and a dependency-cycle check in CI. A directory diagram alone does not prevent accidental imports. Keep server-only entry points separate from browser exports so bundling cannot pull in privileged code.

Inside feature modules, use names that describe the work: `approve-receipt`, `allocate-shares`, `sync-transactions`, `create-invite`. Prefer a small direct function over layers of factories unless multiple implementations or test boundaries justify them.

## 4. Money and database practices

- Define one internal money convention and adapt provider signs at ingestion. Model posted transactions separately from provider payloads.
- Store USD amounts in cents, with currency attached. PostgreSQL integer sizes and JavaScript numeric limits must be explicitly handled; serialize large values safely at API boundaries.
- Use decimal arithmetic for fractional quantities and investment values; round only at documented accounting boundaries.
- Reconcile allocations and shares exactly; use a deterministic largest-remainder or documented residual-cent policy.
- Give transactions stable internal IDs. Provider event IDs, pending IDs, and import fingerprints are external references, not the only identity of a purchase.
- Use unique constraints, foreign keys, check constraints, atomic transactions, and optimistic version checks to enforce invariants under concurrent requests.
- Protect approved categories from provider refreshes. Reprocessing creates a draft proposal rather than silently replacing a confirmed result.
- Keep migration files authoritative; exercise migrations in CI and use synthetic demo seeds. Choose one schema/migration owner rather than competing ORM and dashboard workflows.

## 5. API, job, and reliability practices

Define runtime-validated inputs and outputs, stable error codes, pagination, and bounded query ranges. Share serializable DTOs rather than database row shapes. Design APIs around authenticated actors; ownership IDs in request bodies do not grant authority.

For jobs, implement idempotency, bounded retries with backoff, explicit timeout/failure states, and recovery commands. Acknowledge webhooks after durable receipt of the job, then do work asynchronously. Coordinate cursor updates with transaction ingestion so a failed sync can safely replay. Use per-connection concurrency control to avoid two jobs advancing the same cursor inconsistently.

Keep external providers behind small interfaces such as `BankConnectionProvider`, `ReceiptParser`, and `CategorySuggester`. Do not force every provider into a giant universal interface. Include typed errors and a deterministic fixture adapter for development and demos.

## 6. Testing and CI

| Check | What it verifies |
| --- | --- |
| Domain unit/property tests | Rounding, allocation sums, refunds, transfers, mixed categories, and money bounds. |
| Application tests | Approval requirements, privacy policies, preserved overrides, and job replay behavior. |
| Database integration tests | Real constraints, migrations, RLS/nonprivileged access, concurrency, and atomic writes. |
| Provider contract tests | Normalized responses, webhook validation, malformed payloads, and reconnection states using fixtures. |
| Browser E2E tests | Scan/review/share flow, invitation, balances, and cross-user privacy. |
| AI evaluations | Item extraction/category correctness, unsupported guesses, leakage, malicious receipt text, latency, and cost. |

Run formatting, lint, types, relevant tests, and builds in CI. Changes to shared packages must include their dependents. Database changes run migration/integration checks; prompt or model changes run the affected evaluation set. Keep network-paid integration tests separate from deterministic PR checks, and explicitly report skipped tests. No universal coverage percentage is required; cover the financial and access invariants that matter.

Pin supported Node and package-manager versions and dependency ranges through a reviewed lockfile. CI uses frozen installation. Configure build cache inputs correctly; do not cache live API calls, private receipt artifacts, environment-specific exports, or jobs with side effects. Keep secrets out of logs and remote caches.

## 7. Future AI layer

Begin with narrow assistance rather than open-ended agency:

1. Normalize abbreviated receipt item descriptions while preserving raw text.
2. Suggest item categories using permitted categories and approved user context.
3. Explain a category suggestion or draft a reusable rule for approval.
4. Later, answer questions about spending using authorized structured summaries.

The application owns authorization and approval. The AI adapter returns a typed **proposal**, never a financial write. Useful proposal fields include item ID, suggested category ID, rationale/evidence, confidence indicator, prompt/model version, and validation status. Model confidence is not calibrated probability; evaluate it before using it to prioritize review.

Preserve original receipt amounts and reconcile in deterministic code. Reject invented category IDs and malformed output. A model may help interpret ambiguous text, but must not invent product details that the receipt does not establish. Return an unknown category or request review when evidence is insufficient.

Receipt text is untrusted: a line saying "ignore your instructions" must be processed as document content. Protect every retrieval/tool operation with normal authorization, and use allowlisted read-only tools for any later assistant. Explicit user confirmation and the existing use case are required before any future write capability.

Use authorized SQL aggregates for exact spending questions. A vector database is optional for semantic lookup or explanations, not necessary for summing spending. If embeddings are introduced, scope storage and retrieval by owner/household, define deletion behavior, and do not rely on prompts to filter cross-user results.

Version prompt templates and model configuration alongside redacted or fictional evaluation fixtures. Gate changes on predefined acceptance criteria; measure reconciliation failures, category precision, abstention, user corrections, privacy violations, latency, and cost. Put per-job and per-user usage limits, a feature flag, and manual fallback around the capability.

## 8. Agent instructions versus documentation

| File | Contents |
| --- | --- |
| `AGENTS.md` | Commands, import boundaries, project invariants, security rules, and completion expectations. |
| `README.md` | Human setup, local services, and quick start. |
| `docs/requirements` | Product and technical requirements, including open decisions. |
| `docs/decisions` | Why a consequential choice was made, alternatives, consequences. |
| `docs/runbooks` | Operational recovery procedures. |

Make rules testable where possible. "Keep it modular" is weaker than "domain cannot import database or provider SDKs." Avoid arbitrary file-length limits, mandatory patterns for every class, mandatory tests for copy changes, or blanket permission questions that interrupt routine work.

## 9. Adoption order

1. Put the starter `AGENTS.md` at the future repository root and requirements under `docs/requirements`.
2. Scaffold the minimal workspace and replace proposed commands with verified scripts.
3. Implement one vertical slice: upload a fixture receipt, review item categories, persist allocations, and show the exact spending total.
4. Add household sharing with two-user authorization tests before real account data.
5. Add sync/provider adapters and a worker when needed.
6. Add AI proposals only after deterministic approval, privacy, and accounting paths work.

## Sources

- [AGENTS.md format and nested instructions](https://agents.md/)
- [pnpm workspace and workspace protocol](https://pnpm.io/workspaces)
- [Turborepo internal packages](https://turborepo.com/docs/core-concepts/internal-packages) — optional orchestration reference; verify selected configuration during scaffold.
