import { type Client, createClient } from '@libsql/client';
import { eq } from 'drizzle-orm';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';

import { Todo } from '@/app/entities/todo';
import type { TodosRepository } from '@/app/repositories/todos.repo';

import * as schema from './schema';
import { todos } from './schema';

export class DrizzleRepository implements TodosRepository {
  private readonly client: Client;
  private readonly db: LibSQLDatabase<typeof schema>;

  private static instance: DrizzleRepository;

  private constructor() {
    this.client = createClient({
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });

    this.db = drizzle(this.client, {
      schema,
      logger: true,
    });
  }

  public static getInstance(): DrizzleRepository {
    if (!DrizzleRepository.instance) {
      DrizzleRepository.instance = new DrizzleRepository();
    }

    return DrizzleRepository.instance;
  }

  async getTodo(id: number): Promise<Todo | null> {
    return (
      (await this.db.select().from(todos).where(eq(todos.id, id)).get()) || null
    );
  }

  async getTodos(): Promise<Todo[]> {
    return await this.db.select().from(todos).all();
  }

  async createTodo(params: { content: string }): Promise<Todo> {
    const newTodo = await this.db
      .insert(todos)
      .values(params)
      .returning()
      .get();

    return newTodo;
  }

  async updateTodo(id: number, overrides: Partial<Todo>): Promise<Todo> {
    const newTodo = await this.db
      .update(todos)
      .set(overrides)
      .where(eq(todos.id, id))
      .returning()
      .get();

    return newTodo;
  }

  async deleteTodo(id: number): Promise<void> {
    await this.db.delete(todos).where(eq(todos.id, id)).run();
  }
}
