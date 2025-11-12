'use client';

import { useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add('antialiased');
  }, []);

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
