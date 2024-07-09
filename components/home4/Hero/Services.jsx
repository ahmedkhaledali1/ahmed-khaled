import React from 'react';
import data from '@/data/services.json';
function Services() {
  return (
    <div className="services pt-80 pb-80 bord-thin-top">
      <div className="sec-head mb-50 wow fadeIn">
        <div className="sub-title-icon d-flex align-items-center">
          <span className="icon pe-7s-bell"></span>
          <h6>My Services</h6>
        </div>
        <h4 className="fz-28 text-u fw-600">Services I Provide</h4>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-md-6 wow fadeIn"
            data-wow-delay={`${(index + 1) * 200}ms`}
          >
            <div className="item bord mb-30">
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
                <a href="/services" className="mt-30">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
