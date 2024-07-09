'use client';
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/resume.json';
function Resume() {
  const swiperOptions = {
    modules: [Pagination],

    spaceBetween: 50,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
      },
    },
  };
  return (
    <section className="resume section-padding pt-0">
      <div className="container with-pad">
        <div className="sec-head mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-note2"></span>
                  <h6>My Resume</h6>
                </div>
              </div>
              <h3>Education & Experience</h3>
            </div>
          </div>
        </div>

        <div>
          <div
            className="resume-swiper"
            data-carousel="swiper"
            data-space="50"
            data-speed="1000"
          >
            <Swiper
              id="content-carousel-container-unq-testim"
              className="swiper-container"
              {...swiperOptions}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item text-center">
                    <h6 className="main-color date fz-15 mb-60">
                      {item.history}
                    </h6>
                    <h5>{item.title}</h5>
                    <span className="opacity-8 fw-500 mt-10">
                      [ {item.subTitle} ]
                    </span>
                    <p className="fz-13 mt-15">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
