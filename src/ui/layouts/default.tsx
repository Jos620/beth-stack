import elements from 'typed-html';

import { DefaultBaseHtml } from '../.';

export function DefaultLayout({ children }: elements.Children) {
  return (
    <DefaultBaseHtml>
      <main class="flex flex-col justify-center items-center w-screen h-screen">
        {children}
      </main>
    </DefaultBaseHtml>
  );
}
