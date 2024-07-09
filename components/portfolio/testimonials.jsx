'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import data from '@/data/testimonials.json';
const swiperOptions = {
  modules: [Pagination],

  spaceBetween: 20,
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

function Testimonials() {
  return (
    <section className="testimonials section-padding pt-0">
      <div className="container with-pad">
        <div className="sec-head mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-chat"></span>
                  <h6>Testimonials</h6>
                </div>
              </div>
              <h3>Here’s what my clients say</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="testim-swiper">
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
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
