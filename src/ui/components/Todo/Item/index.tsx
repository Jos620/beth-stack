import { escapeHtml } from '@kitajs/html';

import { Todo } from '@/app/entities/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { id, content, completed } = todo;

  const containerId = `todo-${id}`;
  const target = `#${containerId}`;

  const cleanContent = escapeHtml(content);

  return (
    <div id={containerId} class="flex flex-row justify-between space-x-3">
      <input
        value={cleanContent}
        name="content"
        hx-put={`/todos/${id}`}
        hx-trigger="keyup[key=='Enter'] changed, keyup delay:1s changed"
        hx-target={target}
        hx-swap="outerHTML"
      />

      <div class="space-x-2">
        <input
          type="checkbox"
          checked={completed}
          name="completed"
          hx-post={`/todos/toggle/${id}`}
          hx-target={target}
          hx-swap="outerHTML"
        />

        <button
          class="text-red-500"
          hx-delete={`/todos/${id}`}
          hx-target={target}
          hx-swap="outerHTML"
        >
          X
        </button>
      </div>
    </div>
  );
}
