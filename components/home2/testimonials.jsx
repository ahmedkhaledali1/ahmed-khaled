'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import data from '@/data/testimonials.json';
const swiperOptions = {
  modules: [Pagination],
  spaceBetween: 20,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-p',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: true,
    },
  },
};
function Testimonials() {
  return (
    <div className="sec-box">
      <div className="bg"></div>

      <div className="content-box">
        <div className="testimonials">
          <div className="sec-head mb-80 wow fadeInUp">
            <div className="d-inline-block">
              <div className="sub-title-icon d-flex align-items-center">
                <span className="icon pe-7s-chat"></span>
                <h6>Testimonials</h6>
              </div>
            </div>
            <h3>Here’s what my clients say</h3>
          </div>
          <div className="testim-swiper2 wow fadeInUp" data-wow-delay=".5s">
            <Swiper
              id="content-carousel-container-unq-testim"
              className="swiper-container"
              {...swiperOptions}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div>
                      <div className="cont mb-30">
                        <div className="d-flex align-items-center">
                          <div className="rate-stars fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                            <span className="fz-12 opacity-7 ml-10">
                              ({item.reviews} Reviews)
                            </span>
                          </div>
                        </div>
                        <p className="mt-15">{item.description}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img">
                            <img src={item.photo} alt="" />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6 className="main-color">{item.name}</h6>
                            <span className="fz-13 mt-10 opacity-8">
                              Envato customer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div style={{ textAlign: 'center' }} className="swiper-p"></div>
            </Swiper>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
