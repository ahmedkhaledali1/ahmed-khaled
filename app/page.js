import Script from 'next/script';
import LoadingScreen from '@/components/common/loader';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Cursor from '@/components/common/cusor';
import ProgressScroll from '@/components/common/ProgressScroll';
import Footer from '@/components/home/Footer';
import MinBox from '@/components/landing/minbox';
import Navbar from '@/components/landing/navbar';
import Navtop from '@/components/landing/navtop';
import Lines from '@/components/common/Lines';

export const metadata = {
  title: 'Ahmed',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
};
export default function Landing() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navtop />
      <main>
        <MinBox />
      </main>
      <Footer />

      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/parallax.min.js" strategy="lazyOnload" />
    </body>
  );
}
