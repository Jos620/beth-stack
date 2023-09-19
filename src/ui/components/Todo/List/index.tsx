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
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}
