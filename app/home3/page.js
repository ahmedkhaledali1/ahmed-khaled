import Script from 'next/script';
import LoadingScreen from '@/components/common/loader';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Cursor from '@/components/common/cusor';
import ProgressScroll from '@/components/common/ProgressScroll';
import Footer from '@/components/home/Footer';
import NavTop from '@/components/home3/NavTop';
import Header from '@/components/home3/header';
import Services from '@/components/home3/Services';
import About from '@/components/home3/About';
import Portfolio from '@/components/home3/Portfolio';
import Testimonials from '@/components/home3/Testimonials';
import Brands from '@/components/home3/brands';
import Pricing from '@/components/home3/Pricing';
import Blogs from '@/components/home3/Blogs';
import Contact from '@/components/home3/Contact';

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
export default function Home3() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <NavTop />
      <main>
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
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
