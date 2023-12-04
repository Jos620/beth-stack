import Elysia from 'elysia';

import { assetsController } from '@/infra/http/controllers/assets.controller';
import { mainController } from '@/infra/http/controllers/main.controller';
import { todosController } from '@/infra/http/controllers/todos.controller';

const app = new Elysia()
  .use(assetsController)
  .use(mainController)
  .use(todosController)
  .listen(3000);

console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`
);
