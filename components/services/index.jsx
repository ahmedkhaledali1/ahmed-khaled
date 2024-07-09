import React from 'react';
import data from '@/data/services';
function Servicess() {
  return (
    <section className="services section-padding">
      <div className="container with-pad">
        <div className="sec-head mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-bell"></span>
                  <h6>My Services</h6>
                </div>
              </div>
              <h3>What Services I Provide ?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="item mb-30">
                <div className="cont">
                  <div className="d-flex align-items-center mb-30">
                    <div>
                      <span className="icon-img-50 mr-40">
                        <img src={item.icon} alt="" />
                      </span>
                    </div>
                    <div>
                      <h5 className="fz-20">{item.title}</h5>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <a href="#0" className="mt-30">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicess;
