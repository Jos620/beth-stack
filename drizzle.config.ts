import type { Config } from 'drizzle-kit';

export default {
  schema: './src/infra/database/drizzle/schema.ts',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
