import { Elysia } from 'elysia';
import elements from 'typed-html';

import {
  createTodo,
  deleteTodo,
  toggleTodo,
} from '@/app/services/todos.service';
import { DrizzleRepository } from '@/infra/database/drizzle';
import { TodoItem } from '@/ui/components/Todo/Item';

import { CreateTodoDto, UpdateTodoDto } from '../dto/todos';

const db = DrizzleRepository.getInstance();

export const todosController = new Elysia({ prefix: '/todos' })
  .post(
    '/',
    async ({ body }) => {
      const newTodo = await createTodo(db, body.content);

      return <TodoItem {...newTodo} />;
    },
    {
      body: CreateTodoDto,
    },
  )
  .post(
    '/toggle/:id',
    async ({ params }) => {
      const newTodo = await toggleTodo(db, params.id);

      return <TodoItem {...newTodo} />;
    },
    {
      params: UpdateTodoDto,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await deleteTodo(db, params.id);
    },
    {
      params: UpdateTodoDto,
    },
  );
