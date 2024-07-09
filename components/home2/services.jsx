import React from 'react';
import data from '@/data/services.json';
function Services() {
  return (
    <div className="sec-box" data-scroll-index="1">
      <div className="bg"></div>

      <div className="content-box">
        <div className="services">
          <div className="sec-head mb-80 wow fadeInUp">
            <div className="d-inline-block">
              <div className="sub-title-icon d-flex align-items-center">
                <span className="icon pe-7s-bell"></span>
                <h6>My Services</h6>
              </div>
            </div>
            <h3>What Services I Provide ?</h3>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="item bord mb-30 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="cont">
                    <div className="d-flex align-items-center mb-30">
                      <div>
                        <span className="icon-img-50 mr-30">
                          <img src={item.icon} alt="" />
                        </span>
                      </div>
                      <div>
                        <h5 className="fz-20">{item.title}</h5>
                      </div>
                    </div>
                    <p>{item.description}</p>
                    <a
                      href="/services"
                      className="mt-30 underline sub-title ls1"
                    >
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
