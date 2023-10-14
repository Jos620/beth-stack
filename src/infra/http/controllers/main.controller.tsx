import html from '@elysiajs/html';
import Elysia from 'elysia';

import { DefaultLayout } from '@/ui/layouts/default';
import { HomePage } from '@/ui/pages/home';

export const mainController = new Elysia()
  .use(html())
  .get('/', async ({ html }) =>
    html(
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>,
    ),
  );
