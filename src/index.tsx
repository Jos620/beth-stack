import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import * as elements from 'typed-html';

import { TodoList } from './components/Todo/List';
import { db } from './database';

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) =>
    html(
      <BaseHtml>
        <body
          class="flex justify-center items-center w-screen h-screen"
          hx-get="/todos"
          hx-trigger="load"
          hx-swap="innerHTMl"
        />
      </BaseHtml>,
    ),
  )
  .post('/click', () => <p class="text-dark-400">Clicked!</p>)
  .get('/todos', () => <TodoList todos={db} />)
  .listen(3000);
console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`,
);

const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BETH stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.css"></script>
  </head>

  ${children}
  </html>
`;
