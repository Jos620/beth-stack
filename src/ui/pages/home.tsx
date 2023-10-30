import { TodoForm } from '../components/Todo/Form';
import { TodoList } from '../components/Todo/List';

export function HomePage() {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
}
