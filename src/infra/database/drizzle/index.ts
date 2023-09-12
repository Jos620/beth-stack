import { type Client, createClient } from '@libsql/client';
import { eq } from 'drizzle-orm';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';

import { Todo } from '@/app/entities/todo';
import type { TodosRepository } from '@/app/repositories/todos.repo';

import { DrizzleTodoMapper } from './mappers/todos.mapper';
import * as schema from './schema';
import { todos as todos_table } from './schema';

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
    const todo = await this.db
      .select()
      .from(todos_table)
      .where(eq(todos_table.id, id))
      .get();

    if (!todo) {
      return null;
    }

    return DrizzleTodoMapper.toDomain(todo);
  }

  async getTodos(): Promise<Todo[]> {
    const todos = (await this.db.select().from(todos_table).all()) || [];

    return todos.map(DrizzleTodoMapper.toDomain);
  }

  async createTodo(params: { content: string }): Promise<Todo> {
    const newTodo = await this.db
      .insert(todos_table)
      .values(params)
      .returning()
      .get();

    return DrizzleTodoMapper.toDomain(newTodo);
  }

  async updateTodo(id: number, overrides: Partial<Todo>): Promise<Todo> {
    const newTodo = await this.db
      .update(todos_table)
      .set({
        completed: overrides.completed,
        content: overrides.content,
      })
      .where(eq(todos_table.id, id))
      .returning()
      .get();

    return DrizzleTodoMapper.toDomain(newTodo);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.db.delete(todos_table).where(eq(todos_table.id, id)).run();
  }
}
