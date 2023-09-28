import { Children } from '@kitajs/html';

import { DefaultBaseHtml } from '../.';

interface DefaultLayoutProps {
  children: Children;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultBaseHtml>
      <main class="flex flex-col justify-center items-center w-screen h-screen">
        {children}
      </main>
    </DefaultBaseHtml>
  );
}
