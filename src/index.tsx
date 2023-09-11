import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import elements from 'typed-html';

import { todosController } from '@/infra/http/controllers/todos.controller';
import { TodoList } from '@/ui/components/Todo/List';
import { DefaultLayout } from '@/ui/layouts/default';

import { getAllTodos } from './app/services/todos.service';

const app = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const todos = await getAllTodos();

    return html(
      <DefaultLayout>
        <TodoList todos={todos} />
      </DefaultLayout>,
    );
  })
  .use(todosController)
  .listen(3000);
console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`,
);
