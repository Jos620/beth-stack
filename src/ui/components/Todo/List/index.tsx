import elements from 'typed-html';

import { Todo } from '@/app/entities/todo';

import { TodoItem } from '../Item';

interface TodoListProps {
  todos?: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  if (!todos) {
    return <p>Loading...</p>;
  }

  return (
    <div id="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem todo={todo} />)
      ) : (
        <EmptyFallback />
      )}
    </div>
  );
}

export function EmptyFallback() {
  return <p>There are no todos yet.</p>;
}
