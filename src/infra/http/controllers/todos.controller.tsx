import { Elysia } from 'elysia';
import elements from 'typed-html';

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  toggleTodo,
  updateTodo,
} from '@/app/services/todos.service';
import { DrizzleRepository } from '@/infra/database/drizzle';
import { TodoItem } from '@/ui/components/Todo/Item';
import { TodoList } from '@/ui/components/Todo/List';

import { todosModels } from '../dto/todos';

const db = DrizzleRepository.getInstance();

export const todosController = new Elysia({ prefix: '/todos' })
  .use(todosModels)
  .get('/', async () => {
    const todos = await getAllTodos(db);

    return <TodoList todos={todos} />;
  })
  .post(
    '/',
    async ({ body }) => {
      const todo = await createTodo(db, body.content);

      return <TodoItem todo={todo} />;
    },
    {
      body: 'createTodo',
    },
  )
  .post(
    '/toggle/:id',
    async ({ params }) => {
      const todo = await toggleTodo(db, params.id);

      return <TodoItem todo={todo} />;
    },
    {
      params: 'locateTodo',
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await deleteTodo(db, params.id);
    },
    {
      params: 'locateTodo',
    },
  )
  .put(
    '/:id',
    async ({ params, body }) => {
      const newTodo = await updateTodo(db, params.id, body);

      return <TodoItem todo={newTodo} />;
    },
    {
      params: 'locateTodo',
      body: 'updateTodo',
    },
  );
