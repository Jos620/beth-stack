import html from '@elysiajs/html';
import Elysia from 'elysia';

import { DefaultBaseHtml } from '@/ui';
import { AboutPage } from '@/ui/pages/about';
import { HomePage } from '@/ui/pages/home';

export const mainController = new Elysia()
  .use(html())
  .get('/styles', async () => Bun.file('public/uno.css'))
  .get('/', async ({ html }) =>
    html(
      <DefaultBaseHtml>
        <HomePage />
      </DefaultBaseHtml>
    )
  )
  .get('/about', ({ html }) =>
    html(
      <DefaultBaseHtml>
        <AboutPage />
      </DefaultBaseHtml>
    )
  );
