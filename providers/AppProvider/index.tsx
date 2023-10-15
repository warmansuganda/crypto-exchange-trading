'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/utils/api';

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
