# DailyTodo Backend

Backend API for DailyTodo application built with modern technologies for optimal performance and developer experience.

## Tech Stack

- **Runtime**: Bun (faster execution and package installation than Node.js)
- **Framework**: Hono (ultra-lightweight with excellent TypeScript support)
- **ORM**: Prisma (type-safe database access)
- **Testing**: Vitest (fast test runner with native Bun support)
- **Database**: Supabase (PostgreSQL)

## Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

## Installation

```bash
bun install
```

## Setup

1. Copy `.env.example` to `.env` and configure your database connection:

```bash
cp .env.example .env
```

2. Generate Prisma client:

```bash
bun run db:generate
```

3. Push database schema:

```bash
bun run db:push
```

## Development

Start the development server with hot reload:

```bash
bun run dev
```

The API will be available at `http://localhost:3000`

## Scripts

- `bun run dev` - Start development server with watch mode
- `bun run start` - Start production server
- `bun run test` - Run tests
- `bun run test:watch` - Run tests in watch mode
- `bun run test:coverage` - Generate test coverage report
- `bun run db:generate` - Generate Prisma client
- `bun run db:push` - Push schema changes to database
- `bun run db:migrate` - Run database migrations
- `bun run db:studio` - Open Prisma Studio
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run typecheck` - Type check without emitting files

## Project Structure

```
dailytodo-backend/
├── src/
│   ├── index.ts          # Application entry point
│   ├── routes/           # API routes
│   ├── lib/              # Shared utilities
│   ├── middleware/       # Hono middleware
│   └── types/            # TypeScript types
├── prisma/
│   └── schema.prisma     # Database schema
├── tests/                # Test files
└── package.json
```

## Performance & Cost Considerations

- **Bun Runtime**: Significantly faster startup and execution compared to Node.js, reducing cold start times in serverless environments
- **Hono Framework**: Minimal overhead (~10KB), perfect for edge/serverless deployments
- **Prisma**: Type-safe queries reduce runtime errors, but consider query optimization for high-traffic endpoints
- **Database**: Supabase PostgreSQL offers generous free tier, scale pricing based on usage

## License

MIT
