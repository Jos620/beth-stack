import elements from 'typed-html';

export function TodoForm() {
  return (
    <form
      class="flex flex-row space-x-3 pt-4"
      hx-post="/todos"
      hx-target="#todo-list"
      hx-swap="afterend"
      x-data
      x-on:submit="$nextTick(() => $el.reset())"
    >
      <input type="text" name="content" class="border border-black rounded" />
      <button type="submit">Add</button>
    </form>
  );
}
