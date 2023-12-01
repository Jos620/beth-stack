import Elysia, { Context } from 'elysia';

export function htmxPlugin() {
  return new Elysia()
    .decorate(
      'isHTMXRequest',
      (headers: Context['headers']) => headers['hx-request'] === 'true'
    )
    .decorate(
      'isHTMXBoost',
      (headers: Context['headers']) => headers['hx-boosted'] === 'true'
    );
}
