export function TodoForm(props?: Htmx.Attributes) {
  return (
    <form
      id="todo-form"
      hx-post="/todos"
      hx-target="#todo-list"
      hx-swap="beforeend"
      hx-swap-oob="true"
      x-data
      x-on:submit="$nextTick(() => $el.reset())"
      flex="~ row"
      space-x-3
      pt-4
      {...props}
    >
      <input type="text" name="content" border="~ black" rounded />
      <button type="submit">Add</button>
    </form>
  );
}
