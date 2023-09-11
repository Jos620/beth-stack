import { t } from 'elysia';

export const CreateTodoDto = t.Object({
  content: t.String(),
});

export const UpdateTodoDto = t.Object({
  id: t.Numeric(),
});
