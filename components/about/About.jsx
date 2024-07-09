import React from 'react';

function Aboutc() {
  return (
    <section className="about section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/profile.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/header/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/header/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/header/icon3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/header/icon4.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title-icon d-flex align-items-center">
                <span className="icon pe-7s-gleam"></span>
                <h6>About Me</h6>
              </div>
              <div className="text">
                <h4 className="mb-30">
                  I am Ahmed Khaled
                  <span className="main-color">
                    Full-stack developer (Reactjs, Vuejs, Nodejs)
                  </span>{' '}
                </h4>
                <p>
                  I hold a profound expertise in web development, particularly
                  honed in the following technologies: - React: Redux, Redux
                  Toolkit, Redux, Thunk, Hooks, Gatsby, Next, Redux-form, React
                  Query - Backend: Node.js, Express.js - Database: MySQL,
                  MongoDB, Postgres, DynamoDB - UI Frameworks: Material UI,
                  bootstrab , Tailwind CSS - Library: Swiper - API Integrations:
                  RESTful services, GraphQL Additionally, my competencies
                  stretch into systems integrations, database systems, workflow
                  automations, and process optimizations. My grasp on business
                  analysis, coupled with a solid background in solution
                  architecture and design, enables me to craft solutions that
                  are not only technically sound but also aligned with business
                  goals.
                </p>

                <div className="feat mt-30">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="item mb-15">
                        <h6 className="sub-title ls1">
                          <span className="fz-13 mr-10 main-color">
                            <i className="fas fa-check"></i>
                          </span>{' '}
                          Front End Development
                        </h6>
                      </div>
                      <div className="item sm-mb15">
                        <h6 className="sub-title ls1">
                          <span className="fz-13 mr-10 main-color">
                            <i className="fas fa-check"></i>
                          </span>{' '}
                          Back End Development
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info mt-50">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center sm-mb30">
                        <div className="mr-15">
                          <span className="icon pe-7s-mail"></span>
                        </div>
                        <div>
                          <span className="opacity-7 mb-5">Email Us</span>
                          <h6>ahmed.khaled01233@gmail.com</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center">
                        <div className="mr-15">
                          <span className="icon pe-7s-call"></span>
                        </div>
                        <div>
                          <span className="opacity-7 mb-5">Call Us</span>
                          <h6>+2 0127 809 3760</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutc;
