import { TodoForm } from '../components/Todo/Form';
import { TodoList } from '../components/Todo/List';
import { DefaultLayout } from '../layouts/default';

export function HomePage() {
  return (
    <DefaultLayout>
      <TodoList />
      <TodoForm />
    </DefaultLayout>
  );
}
