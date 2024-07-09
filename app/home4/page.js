import Script from 'next/script';
import LoadingScreen from '@/components/common/loader';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Cursor from '@/components/common/cusor';
import ProgressScroll from '@/components/common/ProgressScroll';
import Footer from '@/components/home/Footer';
import NavTop from '@/components/home4/NavTop';
import Links from '@/components/home4/links';
import HeroI from '@/components/home4/Hero';
import Portfolio from '@/components/home4/Portfolio';
import Blogs from '@/components/home4/Blogs';
import Contact from '@/components/home4/Contact';

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
export default function Home4() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <NavTop />
      <Links />
      <main>
        <section className="min-box pt-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <HeroI />
                <Portfolio />
                <Blogs />
                <Contact />
              </div>
            </div>
          </div>
        </section>
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
