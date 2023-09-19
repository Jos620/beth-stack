import elements from 'typed-html';

import { Todo } from '@/app/entities/todo';

import { TodoItem } from '../Item';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <li>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
