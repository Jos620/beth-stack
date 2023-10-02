import Elysia, { t } from 'elysia';

export const todosModels = new Elysia().model({
  locateTodo: t.Object({
    id: t.Numeric(),
  }),

  createTodo: t.Object({
    content: t.String(),
  }),

  updateTodo: t.Object({
    content: t.Optional(t.String()),
    completed: t.Optional(t.Boolean()),
  }),
});
