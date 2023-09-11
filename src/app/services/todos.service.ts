import { db } from '@/infra/database';
import { todos } from '@/infra/database/schema';

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
