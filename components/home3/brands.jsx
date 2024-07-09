import React from 'react';
import data from '@/data/brands.json';

function Brands() {
  return (
    <section className="brands section-padding pt-0">
      <div className="container">
        <div className="text-center wow fadeIn">
          <h6>
            More than <span className="main-color">200+ companies</span> trusted
            us worldwide
          </h6>
        </div>
        <div className="row wow fadeIn">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 col-lg col-6">
              <div className="item">
                <div className="img icon-img-100">
                  <a href="#0">
                    <img src={item.img} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
