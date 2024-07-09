import React from 'react';
import data from '@/data/works.json';
import generateStylesheetObject from '@/common/generateStylesheetsObject';

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
function Portfolio() {
  return (
    <section className="portfolio section-padding" data-scroll-index="3">
      <div className="container">
        <div className="sec-head mb-40 wow fadeIn">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-portfolio"></span>
                  <h6>My Portfolio</h6>
                </div>
              </div>
              <h3>
                Helping digital brands <br /> scale with design.
              </h3>
            </div>
          </div>
        </div>

        <div className="gallery">
          <div className="container3">
            {data.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="cardd border-none wow fadeIn"
                data-wow-delay={`${index * 200}ms`}
              >
                <div className="item border-none">
                  <div className="img">
                    <img src={item.photo} alt="" />
                    <a href={item.link} className="link"></a>
                  </div>
                  <div className="cont d-flex align-items-center">
                    <div>
                      <h6>{item.title}</h6>
                      <span className="tag">{item.subTitle}</span>
                    </div>
                    <div className="ml-auto">
                      <div className="arrow">
                        <a href={item.link}>
                          <svg
                            className="arrow-right"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 34.2 32.3"
                            xmlSpace="preserve"
                            style={{ strokeWidth: 2 }}
                          >
                            <line x1="0" y1="16" x2="33" y2="16"></line>
                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                            <line
                              x1="17.3"
                              y1="31.6"
                              x2="33.5"
                              y2="15.4"
                            ></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
