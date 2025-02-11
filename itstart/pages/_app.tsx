import type { AppProps } from 'next/app';
import RootLayout from '@/app/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
