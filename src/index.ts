import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';

import { mainController } from '@/infra/http/controllers/main.controller';
import { todosController } from '@/infra/http/controllers/todos.controller';

const app = new Elysia()
  .use(html())
  .use(mainController)
  .use(todosController)
  .listen(3000);

console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`
);
