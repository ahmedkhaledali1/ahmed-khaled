import React from 'react';
import data from '@/data/blogs.json';
function Blogs() {
  return (
    <div className="blog section-padding pb-70 sub-bg" data-scroll-index="4">
      <div className="container">
        <div className="sec-head text-center mb-80 wow fadeIn">
          <div className="d-inline-block">
            <div className="sub-title-icon d-flex align-items-center">
              <span className="icon pe-7s-note"></span>
              <h6>My Blogs</h6>
            </div>
          </div>
          <h3>
            Exploring the <br /> World Through Our Blog
          </h3>
        </div>
        <div className="row justify-content-center">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeIn"
              data-wow-delay={`.${index * 2}s`}
            >
              <div className="item mb-50 bord">
                <div className="img">
                  <img src={item.photo} alt="" />
                </div>
                <div className="cont">
                  <span className="date mb-10">{item.history}</span>
                  <h4>
                    <a href={item.link}>{item.title}</a>
                  </h4>
                  <a href={item.link} className="mt-30 underline sub-title ls1">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
