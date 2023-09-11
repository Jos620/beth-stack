import { eq } from 'drizzle-orm';

import { db } from '@/infra/database';
import { todos } from '@/infra/database/schema';

export async function getTodo(id: number) {
  return await db.select().from(todos).where(eq(todos.id, id)).get();
}

export async function createTodo(content: string) {
  const newTodo = await db
    .insert(todos)
    .values({
      content,
    })
    .returning()
    .get();

  return newTodo;
}

export async function toggleTodo(id: number) {
  const oldTodo = await getTodo(id);

  const newTodo = await db
    .update(todos)
    .set({ completed: !oldTodo?.completed })
    .where(eq(todos.id, id))
    .returning()
    .get();

  return newTodo;
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id)).run();
}
