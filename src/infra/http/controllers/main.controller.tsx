import html from '@elysiajs/html';
import Elysia from 'elysia';
import elements from 'typed-html';

import { getAllTodos } from '@/app/services/todos.service';
import { DrizzleRepository } from '@/infra/database/drizzle';
import { TodoList } from '@/ui/components/Todo/List';
import { DefaultLayout } from '@/ui/layouts/default';

const db = DrizzleRepository.getInstance();

export const mainController = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const todos = await getAllTodos(db);

    return html(
      <DefaultLayout>
        <TodoList todos={todos} />
      </DefaultLayout>,
    );
  });
