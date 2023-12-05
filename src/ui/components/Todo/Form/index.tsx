export function TodoForm() {
  return (
    <form
      hx-post="/todos"
      hx-target="#todo-list"
      hx-swap="outerHTML"
      x-data
      x-on:submit="$nextTick(() => $el.reset())"
      flex="~ row"
      space-x-3
      pt-4
    >
      <input type="text" name="content" border="~ black" rounded />
      <button type="submit">Add</button>
    </form>
  );
}
