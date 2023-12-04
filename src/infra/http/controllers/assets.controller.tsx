import Elysia from 'elysia';

export const assetsController = new Elysia().get('/styles', async () =>
  Bun.file('public/uno.css')
);
