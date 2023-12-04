import Elysia from 'elysia';

export const assetsController = new Elysia({ prefix: 'assets' }).get(
  '/styles',
  async () => Bun.file('public/uno.css')
);
