import { PropsWithChildren } from '@kitajs/html';

import { DefaultBaseHtml } from '../.';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <DefaultBaseHtml>
      <main class="flex flex-col justify-center items-center w-screen h-screen">
        {children}
      </main>
    </DefaultBaseHtml>
  );
}
