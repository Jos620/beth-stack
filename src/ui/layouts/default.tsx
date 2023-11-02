import { PropsWithChildren } from '@kitajs/html';

import { DefaultBaseHtml } from '@/ui';
import { Navigation } from '@/ui/components/Navigation';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <DefaultBaseHtml>
      <div class="flex flex-col justify-center items-center w-screen h-screen">
        {children}

        <Navigation />
      </div>
    </DefaultBaseHtml>
  );
}
