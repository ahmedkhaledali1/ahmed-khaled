'use client';
import Rolling from '@/common/rolling';
import React, { useEffect } from 'react';

function Hero() {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="intro">
              <div className="lg-box">
                <div className="box1">
                  <div className="tow-items">
                    <div className="item1 box-shadwo">
                      <div className="circle-item d-flex align-items-center justify-content-center">
                        <h6>
                          <a href="/about">About</a>
                        </h6>
                      </div>
                      <div className="text-center mt-30">
                        <a href="/Ahmed_Khaled_Frontend_Developer.pdf">
                          <svg
                            className="arrow-down"
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
                          <p className="fz-13 mt-15">Dwonload CV</p>
                        </a>
                      </div>
                    </div>
                    <div className="item2">
                      <div className="sub-item1 box-shadwo d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <h2 className="fw-700">2</h2>
                          <p className="fz-13">
                            Years <br /> of Experaince
                          </p>
                        </div>
                      </div>
                      <div className="sub-item2 box-shadwo"></div>
                    </div>
                  </div>
                  <div className="item-down box-shadwo d-flex align-items-center">
                    <div>
                      <div className="circle-item d-flex align-items-center justify-content-center">
                        <a href="/services">
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
                    <h6 className="ml-15">
                      <a href="/services">My Services</a>
                    </h6>
                  </div>
                </div>

                <div className="box2">
                  <div className="item3 box-shadwo"></div>
                  <div className="item4 box-shadwo d-flex align-items-center">
                    <h6>
                      <a href="/portfolio">My Portfolio</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="bottom-boxs">
                <div className="item5 box-shadwo d-flex align-items-center justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/ahmed-khaled-8b0a52251/"
                    className="icon"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="item6 box-shadwo d-flex align-items-center justify-content-center">
                  <a href="https://github.com/ahmedkhaledali1" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="item7 box-shadwo d-flex align-items-center justify-content-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100094199711505"
                    className="icon"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="author-profile">
              <div className="author-img">
                <div className="img">
                  <img src="/assets/imgs/header/profile.jpg" alt="" />
                </div>
              </div>
              <div className="author-info">
                <div className="text-center">
                  <h4 className="fw-500">Hi, I am Ahmed Khaled</h4>
                </div>
                <div className="social mt-20">
                  <a href="#0" className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
              <div className="butns mt-30">
                <a href="#0" className="inf-butn" data-scroll-nav="4">
                  <span>Contact Us</span>
                </a>
                <a
                  href="/Ahmed_Khaled_Frontend_Developer.pdf"
                  className="inf-butn"
                >
                  <span>Dwonload CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="content">
              <h5 className="cd-headline slide">
                <span>Hello, I’m &nbsp; </span>
                <span className="cd-words-wrapper main-color">
                  <b className="is-visible">Ahmed Khaled</b>
                  <b>Full-Stack Developer</b>
                </span>
              </h5>
              <h1>
                I’m a<span className="bord">Full-Stack Developer</span> Based in
                Egypt.
              </h1>
              <p className="text">
                As an accomplished Full-Stack Developer with two years of
                hands-on experience, I have skillfully executed various projects
                utilizing React.js, and Node.js. My expertise lies particularly
                in Next.js, where I excel at crafting responsive designs and
                successfully delivering impactful projects.
              </p>
              <div className="stauts mt-50 pt-50 bord-thin-top">
                <div className="d-flex align-items-center">
                  <div className="ml-auto">
                    <div className="butn-presv">
                      <a
                        href="/Ahmed_Khaled_Frontend_Developer.pdf"
                        className="butn butn-md butn-bord radius-5 skew"
                      >
                        <span>Hire Me!</span>
                      </a>
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

export default Hero;
