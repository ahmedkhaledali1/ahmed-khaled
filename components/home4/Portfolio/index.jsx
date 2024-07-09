import React from 'react';
import data from '@/data/works.json';
function Portfolio() {
  return (
    <div className="min-sec" id="tab-2">
      <div className="portfolio pt-80 pb-80">
        <div className="sec-head mb-10 wow fadeIn">
          <div className="sub-title-icon d-flex align-items-center">
            <span className="icon pe-7s-portfolio"></span>
            <h6>My Portfolio</h6>
          </div>
          <h4 className="fz-28 text-u fw-600">Featured Works.</h4>
        </div>

        <div className="container2">
          {data.map((item, index) => (
            <div
              key={index}
              className="cardd wow fadeIn"
              data-wow-delay={`${(index + 1) * 200}ms`}
            >
              <div className="item">
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
                          <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
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
  );
}

export default Portfolio;
