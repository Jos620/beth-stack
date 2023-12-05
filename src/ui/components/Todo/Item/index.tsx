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
    <div
      id={containerId}
      hx-target={target}
      hx-swap="outerHTML"
      row
      justify-between
      space-x-3
    >
      <input
        value={cleanContent}
        name="content"
        hx-put={`/todos/${id}`}
        hx-trigger="keyup[key=='Enter'] changed, keyup delay:1s changed"
      />

      <div space-x-2>
        <input
          type="checkbox"
          checked={completed}
          name="completed"
          hx-post={`/todos/toggle/${id}`}
        />

        <button hx-delete={`/todos/${id}`} text-red-500>
          X
        </button>
      </div>
    </div>
  );
}
