import React from 'react';
import data from '@/data/brands.json';
function Brands() {
  return (
    <div className="sec-box">
      <div className="bg"></div>

      <div className="content-box">
        <div className="brands">
          <div className="text-center wow fadeInUp">
            <h6>
              More than <span className="main-color">200+ companies</span>{' '}
              trusted us worldwide
            </h6>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-sm-4 col-md-3 col-lg-2 col-6">
                <div className="item">
                  <div className="img .icon-img-90">
                    <a href="#0">
                      <img src={item.img} alt="" />
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

export default Brands;
