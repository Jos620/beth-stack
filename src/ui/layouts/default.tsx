import elements from 'typed-html';

import { BaseHtml } from '@';

export function DefaultLayout({ children }: elements.Children) {
  return (
    <BaseHtml>
      <body
        hx-boost="true"
        class="flex flex-col justify-center items-center w-screen h-screen"
      >
        {children}
      </body>
    </BaseHtml>
  );
}
