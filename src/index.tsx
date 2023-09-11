import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import elements from 'typed-html';

import { TodoList } from './components/Todo/List';
import { db } from './database';
import { todos } from './database/schema';
import { todosController } from './infra/http/controllers/todos.controller';
import { DefaultLayout } from './layouts/default';

const app = new Elysia()
  .use(html())
  .get('/', async ({ html }) => {
    const data = await db.select().from(todos).all();

    return html(
      <DefaultLayout>
        <TodoList todos={data} />
      </DefaultLayout>,
    );
  })
  .use(todosController)
  .listen(3000);
console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`,
);

export const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BETH stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.css"></script>
  </head>

  ${children}
  </html>
`;
