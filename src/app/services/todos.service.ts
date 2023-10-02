import { Todo } from '../entities/todo';
import { TodosRepository } from '../repositories/todos.repo';

export class TodosService {
  constructor(private readonly db: TodosRepository) {}

  async getTodo(id: Todo['id']) {
    const todo = await this.db.getTodo(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    return todo;
  }

  async getAllTodos() {
    return (await this.db.getTodos()) || [];
  }

  async createTodo(content: Todo['content']) {
    if (content.length === 0) {
      throw new Error('Content cannot be empty');
    }

    const newTodo = await this.db.createTodo({
      content,
    });

    return newTodo;
  }

  async toggleTodo(id: Todo['id']) {
    const oldTodo = await this.getTodo(id);

    const newTodo = await this.db.updateTodo(id, {
      completed: !oldTodo?.completed,
    });

    return newTodo;
  }

  async deleteTodo(id: Todo['id']) {
    return await this.db.deleteTodo(id);
  }

  async updateTodo(id: Todo['id'], overrides?: Partial<Todo>) {
    if (!overrides) return await this.getTodo(id);

    return await this.db.updateTodo(id, overrides);
  }
}
