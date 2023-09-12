import { Todo } from '../entities/todo';

export interface TodosRepository {
  getTodo(id: number): Promise<Todo | null>;
  getTodos(): Promise<Todo[]>;
  createTodo(params: { content: string }): Promise<Todo>;
  updateTodo(id: number, overrides: Partial<Todo>): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}
