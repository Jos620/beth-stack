import elements from 'typed-html';

import { Todo } from '@/app/entities/todo';

import { TodoForm } from '../components/Todo/Form';
import { TodoList } from '../components/Todo/List';
import { DefaultLayout } from '../layouts/default';

interface HomePageProps {
  todos?: Todo[];
}

export function HomePage({ todos }: HomePageProps) {
  return (
    <DefaultLayout>
      {todos?.length ? (
        <TodoList todos={todos} />
      ) : (
        <p>There are no todos yet. Add one!</p>
      )}

      <TodoForm />
    </DefaultLayout>
  );
}
