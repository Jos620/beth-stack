import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';

import { todosController } from '@/infra/http/controllers/todos.controller';

import { mainController } from './infra/http/controllers/index.controller';

const app = new Elysia()
  .use(html())
  .use(mainController)
  .use(todosController)
  .listen(3000);

console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`,
);
