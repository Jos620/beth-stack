import * as elements from 'typed-html';

import { Todo } from '../../../entities/todo';

export function TodoItem({ content, completed }: Todo) {
  return (
    <div class="flex flex-row space-x-3">
      <p>{content}</p>
      <input type="checkbox" checked={completed} />
      <button class="text-red-500">X</button>
    </div>
  );
}
