import { PropsWithChildren } from '@kitajs/html';

import { Navigation } from '@/ui/components/Navigation';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div col center w-screen h-screen>
      {children}

      <Navigation />
    </div>
  );
}
