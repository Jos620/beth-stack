import { Todo } from '../entities/todo';

export interface TodosRepository {
  getTodo(id: Todo['id']): Promise<Todo | null>;
  getTodos(): Promise<Todo[]>;
  createTodo(params: { content: Todo['content'] }): Promise<Todo>;
  updateTodo(id: Todo['id'], overrides: Partial<Todo>): Promise<Todo>;
  deleteTodo(id: Todo['id']): Promise<void>;
}
