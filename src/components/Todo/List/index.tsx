import elements from 'typed-html';

import { Todo } from '../../../entities/todo';
import { TodoItem } from '../Item';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
}
