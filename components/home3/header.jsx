import React from 'react';

function Header() {
  return (
    <section className="header-crev bord-thin-bottom" data-scroll-index="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title mb-30 fz-14 opacity-7">
                Full Stack Developer
              </h6>
              <h1 style={{ fontSize: '50px' }}>
                Hello, I’m <br />{' '}
                <span className="main-color">Ahmed Khaled</span>
              </h1>
              <div className="text mt-30">
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
              </div>
              <div className="mt-50">
                <a
                  href="#0"
                  className="butn butn-md butn-bg bg-white text-dark radius-5"
                >
                  <span>Dwonload CV</span>
                </a>
                <a
                  href="#0"
                  className="butn butn-md butn-bord radius-5 ml-15"
                  data-scroll-nav="5"
                >
                  <span>Hire Me !</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-author">
              <img src="/assets/imgs/header/b1.png" alt="" />

              <div className="box-shadwo">
                <div className="d-flex align-items-center">
                  <h2>2</h2>
                  <h6>
                    Years of <br /> Experiences
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
