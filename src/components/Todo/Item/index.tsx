import elements from 'typed-html';

import { Todo } from '../../../entities/todo';

export function TodoItem({ content, completed, id }: Todo) {
  return (
    <div id={`todo-${id}`} class="flex flex-row space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-target={`#todo-${id}`}
      />
      <button
        class="text-red-500"
        hx-delete={`/todos/${id}`}
        hx-target={`#todo-${id}`}
      >
        X
      </button>
    </div>
  );
}
