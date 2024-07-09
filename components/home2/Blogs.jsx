import React from 'react';
import data from '@/data/blogs.json';
function Blogs() {
  return (
    <div className="sec-box" data-scroll-index="3">
      <div className="bg"></div>

      <div className="content-box">
        <div className="blog">
          <div className="sec-head mb-80 wow fadeInUp">
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
          <div className="row">
            {data.slice(0, 4).map((item, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="item mb-50 bord wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="img">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="cont">
                    <span className="date mb-10">{item.history}</span>
                    <h4>
                      <a href={item.link}>{item.title}</a>
                    </h4>
                    <a
                      href={item.link}
                      className="mt-30 underline sub-title ls1"
                    >
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
