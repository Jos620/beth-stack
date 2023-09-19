import elements from 'typed-html';

import { TodoForm } from '../components/Todo/Form';
import { TodoList } from '../components/Todo/List';
import { DefaultLayout } from '../layouts/default';

export function HomePage() {
  return (
    <DefaultLayout>
      <div hx-get="/todos" hx-trigger="load">
        <TodoList />
      </div>

      <TodoForm />
    </DefaultLayout>
  );
}
