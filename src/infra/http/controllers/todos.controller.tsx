import { Elysia } from 'elysia';

import { TodosService } from '@/app/services/todos.service';
import { DrizzleRepository } from '@/infra/database/drizzle';
import { TodoItem } from '@/ui/components/Todo/Item';
import { EmptyFallback, TodoList } from '@/ui/components/Todo/List';

import { todosModels } from '../dto/todos';

const db = DrizzleRepository.getInstance();
const service = new TodosService(db);

export const todosController = new Elysia({ prefix: '/todos' })
  .use(todosModels)
  .get('/', async () => {
    const todos = await service.getAllTodos();

    return <TodoList todos={todos} />;
  })
  .post(
    '/',
    async ({ body }) => {
      await service.createTodo(body.content);
      const todos = await service.getAllTodos();

      return <TodoList todos={todos} />;
    },
    {
      body: 'createTodo',
    }
  )
  .post(
    '/toggle/:id',
    async ({ params }) => {
      const todo = await service.toggleTodo(params.id);

      return <TodoItem todo={todo} />;
    },
    {
      params: 'locateTodo',
    }
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await service.deleteTodo(params.id);

      const todos = await service.getAllTodos();
      if (!todos.length) return <EmptyFallback />;
    },
    {
      params: 'locateTodo',
    }
  )
  .put(
    '/:id',
    async ({ params, body }) => {
      const newTodo = await service.updateTodo(params.id, body);

      return <TodoItem todo={newTodo} />;
    },
    {
      params: 'locateTodo',
      body: 'updateTodo',
    }
  );
