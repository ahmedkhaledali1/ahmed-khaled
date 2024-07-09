'use client';
import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';

function Links() {
  return (
    <div className="col-lg-4">
      <StickyBox offsetTop={50}>
        <div className="left-area">
          <div className="menu-links ml-auto fz-18">
            <a href="#0" className="active" data-scroll-nav="0">
              <span className="icon pe-7s-home"></span>
              <span className="text">Home</span>
            </a>
            <a href="#0" data-scroll-nav="1">
              <span className="icon pe-7s-graph"></span>
              <span className="text">Services</span>
            </a>
            <a href="#0" data-scroll-nav="2">
              <span className="icon pe-7s-portfolio"></span>
              <span className="text">Portfolio</span>
            </a>
            {/* <a href="#0" data-scroll-nav="3">
              <span className="icon pe-7s-note"></span>
              <span className="text">Blog</span>
            </a> */}
            <a href="#0" data-scroll-nav="4">
              <span className="icon pe-7s-map-marker"></span>
              <span className="text">Contact</span>
            </a>
          </div>
          <div className="author-profile">
            <div className="author-img">
              <div className="img">
                <img src="/assets/imgs/header/profile.jpg" alt="" />
              </div>
            </div>
            <div className="author-info">
              <div className="text-center">
                <span className="main-color sub-title mb-10">
                  Full-stack Developer
                </span>
                <h4 className="fw-500">Hi, I&apos;m Ahmed Khaled</h4>
              </div>
              <div className="social mt-20">
                <a
                  href="https://www.linkedin.com/in/ahmed-khaled-8b0a52251/"
                  className="icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ahmedkhaledali1" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100094199711505"
                  className="icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="butns mt-30">
              <a href="#0" className="inf-butn" data-scroll-nav="4">
                <span>Contact Us</span>
              </a>
              <a href="#0" className="inf-butn">
                <span>Dwonload CV</span>
              </a>
            </div>
          </div>
        </div>
      </StickyBox>
    </div>
  );
}

export default Links;
