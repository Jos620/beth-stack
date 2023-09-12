import elements from 'typed-html';

import { Todo } from '@/app/entities/todo';

import { TodoForm } from '../Form';
import { TodoItem } from '../Item';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <TodoForm />
    </div>
  );
}
