import sanitize from 'sanitize-html';
import elements from 'typed-html';

import { Todo } from '@/app/entities/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { id, content, completed } = todo;

  const containerId = `todo-${id}`;

  const cleanContent = sanitize(content, {
    allowedTags: [],
  });

  return (
    <div id={containerId} class="flex flex-row justify-between space-x-3">
      <form
        hx-put={`/todos/${id}`}
        hx-trigger={`keyup[key=='Enter'] from:input#todo-${id}-input,
          keyup[
            key!='ArrowRight' && key!='ArrowLeft' && key!='ArrowTop' && key!='ArrowBottom'
          ] delay:1s from:input#todo-${id}-input`}
        hx-target={`#${containerId}`}
        hx-swap="outerHTML"
      >
        <input
          id={`todo-${id}-input`}
          value={cleanContent}
          name="content"
          _="on keydown[key is 'Enter'] halt"
        />
      </form>

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
