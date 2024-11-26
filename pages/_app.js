import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import Loading from '../components/loading';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
