import React from 'react';

function Pricing() {
  return (
    <section className="price section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80 wow fadeIn">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-rocket"></span>
                  <h6>My Pricing</h6>
                </div>
              </div>
              <h3>Amazing Pricing For Your Projects</h3>
              <p className="mt-15">
                We get involved with clients to solve their design problems and
                provide more-value™️ to them.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay=".2s">
            <div className="item md-mb50">
              <h6 className="type">Standard</h6>
              <div className="content d-flex align-items-center">
                <div className="amount mr-40">
                  <h2 className="main-color">$19</h2>
                  <a
                    href="/contact"
                    className="butn butn-md butn-bord radius-30 text-u text-center mt-30"
                  >
                    <span>Sign Up</span>
                  </a>
                </div>
                <div className="feat">
                  <ul className="rest">
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Need your wireframe</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Design with Figma, Framer</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>
                        Implement with Webflow, React, WordPress, Laravel/PHP
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Support 6 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay=".4s">
            <div className="item">
              <h6 className="type">Premium</h6>
              <div className="content d-flex align-items-center">
                <div className="amount mr-40">
                  <h2 className="main-color">$59</h2>
                  <a
                    href="/contact"
                    className="butn butn-md butn-bord radius-30 text-u text-center mt-30"
                  >
                    <span>Sign Up</span>
                  </a>
                </div>
                <div className="feat">
                  <ul className="rest">
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Need your wireframe</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Design with Figma, Framer</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>
                        Implement with Webflow, React, WordPress, Laravel/PHP
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>{' '}
                      <span>Support 6 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
