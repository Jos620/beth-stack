import html from '@elysiajs/html';
import Elysia from 'elysia';
import elements from 'typed-html';

import { HomePage } from '@/ui/pages/home';

export const mainController = new Elysia()
  .use(html())
  .get('/', async ({ html }) => html(<HomePage />));
