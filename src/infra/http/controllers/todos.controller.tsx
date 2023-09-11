import { eq } from 'drizzle-orm';
import { Elysia, t } from 'elysia';
import elements from 'typed-html';

import { TodoItem } from '../../../components/Todo/Item';
import { db } from '../../../database';
import { todos } from '../../../database/schema';

export const todosController = new Elysia()
  .post(
    '/',
    async ({ body }) => {
      if (body.content.length === 0) {
        throw new Error('Content cannot be empty');
      }

      const newTodo = await db.insert(todos).values(body).returning().get();

      return <TodoItem {...newTodo} />;
    },
    {
      body: t.Object({
        content: t.String(),
      }),
    },
  )
  .post(
    '/toggle/:id',
    async ({ params }) => {
      const oldTodo = await db
        .select()
        .from(todos)
        .where(eq(todos.id, params.id))
        .get();

      const newTodo = await db
        .update(todos)
        .set({ completed: !oldTodo?.completed })
        .where(eq(todos.id, params.id))
        .returning()
        .get();

      return <TodoItem {...newTodo} />;
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(todos).where(eq(todos.id, params.id)).run();
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  );
