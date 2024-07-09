'use client';
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import data from '@/data/skills';
import data2 from '@/data/resume';
function About() {
  return (
    <section className="section-padding sub-bg" data-scroll-index="1">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-5 about">
            <StickyBox offsetBottom={20} className="profile-img">
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
            </StickyBox>
          </div>
          <div className="col-lg-6">
            <div>
              <div className="about wow fadeIn">
                <div className="cont">
                  <div className="sub-title-icon d-flex align-items-center">
                    <span className="icon pe-7s-gleam"></span>
                    <h6>About Me</h6>
                  </div>
                  <div className="text">
                    <h4 className="mb-30">
                      I&#39;m{' '}
                      <span className="main-color">Full Stack Developer</span>{' '}
                    </h4>

                    <div className="feat mt-30">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="item mb-15">
                            <h6 className="sub-title ls1">
                              <span className="fz-13 mr-10 main-color">
                                <i className="fas fa-check"></i>
                              </span>
                              FrontEnd Developement
                            </h6>
                          </div>
                          <div className="item sm-mb15">
                            <h6 className="sub-title ls1">
                              <span className="fz-13 mr-10 main-color">
                                <i className="fas fa-check"></i>
                              </span>{' '}
                              Back End Developement
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
              <div className="skills pt-80 pb-80 wow fadeIn">
                <div className="sec-head mb-50">
                  <div className="sub-title-icon d-flex align-items-center">
                    <span className="icon pe-7s-gym"></span>
                    <h6>My Skills</h6>
                  </div>
                  <h3>My Advantages</h3>
                </div>
                <div className="row">
                  {data.map((item, i) => (
                    <div key={i} className="col-md-6">
                      <div className="item mb-30">
                        <div className="d-flex align-items-center mb-30">
                          <div className="mr-30">
                            <div className="img icon-img-40">
                              <img src={item.photo} alt="" />
                            </div>
                          </div>
                          <div>
                            <h6 className="fz-18">{item.title}</h6>
                          </div>
                        </div>
                        <div className="skill-progress">
                          <span
                            className="progres"
                            data-value={item.persent}
                          ></span>
                        </div>
                        <span className="value">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="resume2 wow fadeIn">
                <div className="sec-head mb-50">
                  <div className="sub-title-icon d-flex align-items-center">
                    <span className="icon pe-7s-note2"></span>
                    <h6>My Resume</h6>
                  </div>
                  <h3>Education & Experience</h3>
                </div>
                <div>
                  <div className="resume-clumn">
                    {data2.map((item, i) => (
                      <div key={i} className="items mb-40">
                        <h6 className="date fz-14">{item.history}</h6>
                        <h5>{item.title}</h5>
                        <span className="opacity-8 fw-500 mt-10">
                          [ {item.subTitle} ]
                        </span>
                      </div>
                    ))}
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

export default About;
