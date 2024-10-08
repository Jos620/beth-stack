import { Todo } from '@/app/entities/todo';

import { Loading } from '../../Loading';
import { TodoItem } from '../Item';

interface TodoListProps {
  todos?: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  if (!todos) {
    return (
      <div hx-trigger="load" hx-get="/todos" hx-swap="outerHTML">
        <Loading />
      </div>
    );
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
