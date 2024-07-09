import React from 'react';
import data from '@/data/blogs.json';
function Blogss() {
  return (
    <section className="blog section-padding">
      <div className="container with-pad">
        <div className="sec-head mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
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
          </div>
        </div>
        <div className="row lg-marg justify-content-center">
          <div className="col-lg-7">
            <div className="md-mb80">
              {data.slice(0, 3).map((item, index) => (
                <div key={index} className="item pb-50 mb-50 bord-thin-bottom">
                  <div className="img">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="cont mt-30">
                    <span className="date mb-10">{item.history}</span>
                    <h4 className="mb-15">
                      <a href={item.link}>{item.title} </a>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="search-box">
                <input type="text" name="search-post" placeholder="Search" />
                <span className="icon pe-7s-search"></span>
              </div>
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a href="/blogs">Business</a>
                    </span>
                    <span className="ml-auto">33</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blogs">Lifestyle</a>
                    </span>
                    <span className="ml-auto">05</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blogs">Creative</a>
                    </span>
                    <span className="ml-auto">28</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blogs">WordPress</a>
                    </span>
                    <span className="ml-auto">17</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blogs">Design</a>
                    </span>
                    <span className="ml-auto">45</span>
                  </li>
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">latest Posts</h6>
                <div className="item">
                  <div className="valign">
                    <div className="img">
                      <a href="/blogs">
                        <img src="/assets/imgs/blog/t1.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>
                      <a href="/blogs">
                        ways to quickly increase traffic to your website
                      </a>
                    </h6>
                    <span>
                      <a href="/blogs">14 sep 2021</a>
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="valign">
                    <div className="img">
                      <a href="/blogs">
                        <img src="/assets/imgs/blog/t2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>
                      <a href="/blogs">
                        breaking the rules: using sqlite to demo web
                      </a>
                    </h6>
                    <span>
                      <a href="/blogs">14 sep 2021</a>
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="valign">
                    <div className="img">
                      <a href="/blogs">
                        <img src="/assets/imgs/blog/t3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>
                      <a href="/blogs">
                        building better ui designs with layout grids
                      </a>
                    </h6>
                    <span>
                      <a href="blogs">14 sep 2021</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="/blogs">Creative</a>
                  <a href="/blogs">Design</a>
                  <a href="/blogs">Dark & Light</a>
                  <a href="/blogs">Minimal</a>
                  <a href="/blogs">Ahmed</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogss;
