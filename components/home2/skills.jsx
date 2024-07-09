import React from 'react';
import data from '@/data/skills.json';
function Skills() {
  return (
    <div className="sec-box" data-scroll-index="0">
      <div className="bg"></div>

      <div className="content-box">
        <div className="skills">
          <div className="sec-head mb-80 wow fadeInUp">
            <div className="sub-title-icon d-flex align-items-center">
              <span className="icon pe-7s-gym"></span>
              <h6>My Skills</h6>
            </div>
            <h3>My Advantages</h3>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                      <div className="img icon-img-40">
                        <img src={item.photo} alt="" />
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.title}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span className="progres" data-value={item.persent}></span>
                  </div>
                  <span className="value">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
