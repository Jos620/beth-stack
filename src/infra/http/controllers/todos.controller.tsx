import { eq } from 'drizzle-orm';
import { Elysia } from 'elysia';
import elements from 'typed-html';

import { TodoItem } from '../../../components/Todo/Item';
import { db } from '../../database';
import { todos } from '../../database/schema';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todos';

export const todosController = new Elysia({ prefix: '/todos' })
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
      body: CreateTodoDto,
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
      params: UpdateTodoDto,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(todos).where(eq(todos.id, params.id)).run();
    },
    {
      params: UpdateTodoDto,
    },
  );
