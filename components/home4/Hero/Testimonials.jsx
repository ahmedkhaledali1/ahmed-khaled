'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/testimonials.json';
function Testimonials() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 1000,
    loop: true,
  };
  return (
    <div className="testimonials pt-80 pb-80 bord-thin-top">
      <div className="sec-head mb-50 wow fadeIn">
        <div className="sub-title-icon d-flex align-items-center">
          <span className="icon pe-7s-chat"></span>
          <h6>Testimonials</h6>
        </div>
        <h4 className="fz-28 text-u fw-600">What my clients say</h4>
      </div>
      <div className="testim-swiper3 wow fadeIn">
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
  );
}

export default Testimonials;
