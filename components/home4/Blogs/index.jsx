import React from 'react';
import data from '@/data/blogs.json';
function Blogs() {
  return (
    <div className="min-sec" id="tab-3">
      <div className="blog pt-80 pb-80">
        <div className="sec-head mb-50 wow fadeIn">
          <div className="sub-title-icon d-flex align-items-center">
            <span className="icon pe-7s-note"></span>
            <h6>My Blogs</h6>
          </div>
          <h4 className="fz-28 text-u fw-600">Latest News.</h4>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="item pb-50 mb-50 bord-thin-bottom wow fadeIn"
              data-wow-delay={`${index * 300}ms`}
            >
              <div className="img">
                <img src={item.photo} alt="" />
              </div>
              <div className="cont mt-30">
                <span className="date mb-15">{item.history}</span>
                <h5 className="mb-15 fw-600">
                  <a href={item.link}>{item.title}</a>
                </h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
