import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import elements from 'typed-html';

import { db } from '@/infra/database';
import { todos } from '@/infra/database/schema';
import { todosController } from '@/infra/http/controllers/todos.controller';
import { TodoList } from '@/ui/components/Todo/List';
import { DefaultLayout } from '@/ui/layouts/default';

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
