import { InferSelectModel } from 'drizzle-orm';

import { Todo } from '@/app/entities/todo';

import { todos } from '../schema';

export type DrizzleTodo = InferSelectModel<typeof todos>;

export class DrizzleTodoMapper {
  static toPersistance(todo: Todo): DrizzleTodo {
    return {
      id: parseInt(todo.id),
      content: todo.content,
      completed: todo.completed,
    };
  }

  static toDomain(todo: DrizzleTodo): Todo {
    return new Todo(
      {
        content: todo.content,
        completed: todo.completed,
      },
      todo.id.toString(),
    );
  }
}
