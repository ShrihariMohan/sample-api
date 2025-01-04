import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions }>
     <DocsLayout tree={source.pageTree}>
          {children}
        </DocsLayout>
  </HomeLayout>;
}
