import React from 'react';

function Contact2() {
  return (
    <div className="sec-box">
      <div className="bg"></div>

      <div className="content-box">
        <div className="contact">
          <div className="sec-head mb-80">
            <div className="d-inline-block">
              <div className="sub-title-icon d-flex align-items-center">
                <span className="icon pe-7s-map-marker"></span>
                <h6>Contact Us</h6>
              </div>
            </div>
            <h3>Let&apos;s Get in Touch!</h3>
          </div>
          <div className="info mb-80">
            <div className="row">
              <div className="col-md-6">
                <div className="item mb-30 d-flex align-items-center">
                  <div className="mr-15">
                    <span className="icon fz-40 main-color pe-7s-call"></span>
                  </div>
                  <div className="mr-10">
                    <h6 className="opacity-7">Phone</h6>
                  </div>
                  <div className="ml-auto">
                    <h4>+2 0127 809 3760</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item mb-30 d-flex align-items-center">
                  <div className="mr-15">
                    <span className="icon fz-40 main-color pe-7s-mail"></span>
                  </div>

                  <div style={{ overflow: 'hidden' }}>
                    <h4>
                      <a
                        style={{ fontSize: '13px' }}
                        href="mailto:ahmed.khaled01233@gmail.com"
                      >
                        ahmed.khaled01233@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="item d-flex align-items-center">
                  <div className="mr-15">
                    <span className="icon fz-40 main-color pe-7s-map-marker"></span>
                  </div>
                  <div className="mr-10">
                    <h6 className="opacity-7">Address</h6>
                  </div>
                  <div className="ml-auto">
                    <h4>Egypt, Bani suaif</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
