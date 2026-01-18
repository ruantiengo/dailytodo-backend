# DailyTodo Backend

Backend API for DailyTodo application built with modern technologies for optimal performance and developer experience.

## Tech Stack

- **Runtime**: Bun (faster execution and package installation than Node.js)
- **Framework**: Hono (ultra-lightweight with excellent TypeScript support)
- **ORM**: Prisma (type-safe database access)
- **Testing**: Vitest (fast test runner with native Bun support)
- **Database**: SQLite (local development) / Supabase PostgreSQL (production)

## Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

## Installation

```bash
bun install
```

## Setup

1. The `.env` file is already configured with SQLite for local development:

```bash
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=development
```

2. Generate Prisma client and create database:

```bash
bun run db:generate
bun run db:push
```

The SQLite database will be created at `prisma/dev.db`

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
│   │   └── tasks.ts      # Tasks endpoints
│   ├── controllers/      # Request handlers (future)
│   ├── services/         # Business logic
│   │   └── taskService.ts
│   ├── lib/              # Shared utilities
│   │   └── prisma.ts     # Prisma client
│   ├── middleware/       # Hono middleware
│   │   └── validation.ts # Zod validation
│   └── types/            # TypeScript types
│       └── task.ts       # Task schemas and types
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── dev.db            # SQLite database (created after db:push)
├── tests/                # Test files
└── package.json
```

## API Endpoints

### Tasks

- `GET /api/tasks` - Listar todas as tarefas
- `GET /api/tasks/:id` - Obter tarefa específica
- `POST /api/tasks` - Criar nova tarefa
- `PUT /api/tasks/:id` - Atualizar tarefa
- `DELETE /api/tasks/:id` - Deletar tarefa
- `PATCH /api/tasks/:id/complete` - Marcar como completa/incompleta

Veja `API_EXAMPLES.md` para exemplos de uso.

## Performance & Cost Considerations

- **Bun Runtime**: Significantly faster startup and execution compared to Node.js, reducing cold start times in serverless environments
- **Hono Framework**: Minimal overhead (~10KB), perfect for edge/serverless deployments
- **Prisma**: Type-safe queries reduce runtime errors, but consider query optimization for high-traffic endpoints
- **SQLite (Development)**: 
  - ✅ Zero infrastructure cost
  - ✅ Excellent performance for local development
  - ✅ Simple setup, no server required
  - ⚠️ Limited to single user/process
- **Supabase PostgreSQL (Production)**: 
  - Generous free tier for production
  - Automatic backups and scaling
  - Multi-user support

## License

MIT
