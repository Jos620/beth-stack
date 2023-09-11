import html from '@elysiajs/html';
import Elysia from 'elysia';
import elements from 'typed-html';

import { getAllTodos } from '@/app/services/todos.service';
import { TodoList } from '@/ui/components/Todo/List';
import { DefaultLayout } from '@/ui/layouts/default';

export const mainController = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const todos = await getAllTodos();

    return html(
      <DefaultLayout>
        <TodoList todos={todos} />
      </DefaultLayout>,
    );
  });
