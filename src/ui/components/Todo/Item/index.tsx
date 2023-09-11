import elements from 'typed-html';

import { Todo } from '@/entities/todo';

export function TodoItem({ content, completed, id }: Todo) {
  const containerId = `todo-${id}`;

  return (
    <div id={containerId} class="flex flex-row justify-between space-x-3">
      <p>{content}</p>

      <div>
        <input
          type="checkbox"
          checked={completed}
          hx-post={`/todos/toggle/${id}`}
          hx-target={`#${containerId}`}
          hx-swap="outerHTML"
        />
        <button
          class="text-red-500"
          hx-delete={`/todos/${id}`}
          hx-target={`#${containerId}`}
          hx-swap="outerHTML"
        >
          X
        </button>
      </div>
    </div>
  );
}