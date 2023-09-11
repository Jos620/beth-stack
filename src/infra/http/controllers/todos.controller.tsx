import { Elysia } from 'elysia';
import elements from 'typed-html';

import {
  createTodo,
  deleteTodo,
  toggleTodo,
} from '@/app/services/todos.service';
import { TodoItem } from '@/ui/components/Todo/Item';

import { CreateTodoDto, UpdateTodoDto } from '../dto/todos';

export const todosController = new Elysia({ prefix: '/todos' })
  .post(
    '/',
    async ({ body }) => {
      if (body.content.length === 0) {
        throw new Error('Content cannot be empty');
      }

      const newTodo = await createTodo(body.content);

      return <TodoItem {...newTodo} />;
    },
    {
      body: CreateTodoDto,
    },
  )
  .post(
    '/toggle/:id',
    async ({ params }) => {
      const newTodo = await toggleTodo(params.id);

      return <TodoItem {...newTodo} />;
    },
    {
      params: UpdateTodoDto,
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await deleteTodo(params.id);
    },
    {
      params: UpdateTodoDto,
    },
  );
