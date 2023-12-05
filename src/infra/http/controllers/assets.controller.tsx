import Elysia from 'elysia';

export const assetsController = new Elysia({ prefix: 'assets' }).get(
  '/uno.css',
  async () => Bun.file('public/uno.css')
);
