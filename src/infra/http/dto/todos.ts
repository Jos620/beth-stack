import { t } from 'elysia';

export const CreateTodoDto = t.Object({
  content: t.String(),
});

export const UpdateTodoDto = t.Object({
  id: t.String(),
});

export const UpdateTodoContentDto = t.Object({
  content: t.Optional(t.String()),
  completed: t.Optional(t.Boolean()),
});
