import Script from 'next/script';
import LoadingScreen from '@/components/common/loader';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Cursor from '@/components/common/cusor';
import ProgressScroll from '@/components/common/ProgressScroll';
import Footer from '@/components/home/Footer';
import Links from '@/components/home2/Links';
import About from '@/components/home2/About';
import Skills from '@/components/home2/skills';
import Services from '@/components/home2/services';
import Portfolio from '@/components/home2/Portfolio';
import Resume from '@/components/home2/resume';
import Princing from '@/components/home2/Princing';
import Testimonials from '@/components/home2/testimonials';
import Brands from '@/components/home2/Brands';
import Blogs from '@/components/home2/Blogs';
import Contact from '@/components/home2/Contact';
import Contact2 from '@/components/home2/Contact2';
import Navbar from '@/components/home2/Navbar';

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
export default function Home2() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Navbar />
      <main className="container">
        <section className="main-sec pt-80 pb-80">
          <div className="row sm-marg w-full">
            <Links />
            <div className="col-lg-8">
              <div className="main-boxs">
                <About />
                <Skills />
                <Services />
                <Portfolio />
                <Resume />
                {/* <Princing />
                <Testimonials />
                <Brands />
                <Blogs /> */}
                <Contact />
                <Contact2 />
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
