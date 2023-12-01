import { PropsWithChildren } from '@kitajs/html';

import { Navigation } from '@/ui/components/Navigation';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div class="flex flex-col justify-center items-center w-screen h-screen">
      {children}

      <Navigation />
    </div>
  );
}
