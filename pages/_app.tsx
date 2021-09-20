import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/carousel.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
