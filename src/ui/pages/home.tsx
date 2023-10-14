import { Loading } from '../components/Loading';
import { TodoForm } from '../components/Todo/Form';

export function HomePage() {
  return (
    <>
      <div hx-get="/todos" hx-trigger="load" hx-swap="outerHTML">
        <Loading />
      </div>

      <TodoForm />
    </>
  );
}
