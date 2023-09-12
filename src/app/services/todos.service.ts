import { TodosRepository } from '../repositories/todos.repo';

export async function getTodo(db: TodosRepository, id: number) {
  const todo = await db.getTodo(id);

  if (!todo) {
    throw new Error('Todo not found');
  }

  return todo;
}

export async function getAllTodos(db: TodosRepository) {
  return (await db.getTodos()) || [];
}

export async function createTodo(db: TodosRepository, content: string) {
  if (content.length === 0) {
    throw new Error('Content cannot be empty');
  }

  const newTodo = await db.createTodo({
    content,
  });

  return newTodo;
}

export async function toggleTodo(db: TodosRepository, id: number) {
  const oldTodo = await getTodo(db, id);

  const newTodo = await db.updateTodo(id, {
    completed: !oldTodo?.completed,
  });

  return newTodo;
}

export async function deleteTodo(db: TodosRepository, id: number) {
  return await db.deleteTodo(id);
}
