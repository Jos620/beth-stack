import html from '@elysiajs/html';
import Elysia from 'elysia';

import { DefaultBaseHtml } from '@/ui';
import { AboutPage } from '@/ui/pages/about';
import { HomePage } from '@/ui/pages/home';

import { htmx } from '../helpers/htmx';

export const mainController = new Elysia()
  .use(html())
  .use(htmx())
  .get('/', async ({ headers, html, isHTMXRequest }) => {
    if (isHTMXRequest(headers)) {
      return <HomePage />;
    }

    return html(
      <DefaultBaseHtml>
        <HomePage />
      </DefaultBaseHtml>
    );
  })
  .get('/about', ({ headers, html, isHTMXRequest }) => {
    if (isHTMXRequest(headers)) {
      return <AboutPage />;
    }

    return html(
      <DefaultBaseHtml>
        <AboutPage />
      </DefaultBaseHtml>
    );
  });
