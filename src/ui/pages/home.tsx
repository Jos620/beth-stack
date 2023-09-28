import { Loading } from '../components/Loading';
import { TodoForm } from '../components/Todo/Form';
import { DefaultLayout } from '../layouts/default';

export function HomePage() {
  return (
    <DefaultLayout>
      <div hx-get="/todos" hx-trigger="load" hx-swap="outerHTML">
        <Loading />
      </div>

      <TodoForm />
    </DefaultLayout>
  );
}
