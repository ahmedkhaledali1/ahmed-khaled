import React from 'react';
import data from '@/data/skills.json';
function Skills() {
  return (
    <div className="skills pt-80 pb-80 bord-thin-top">
      <div className="sec-head mb-50 wow fadeIn">
        <div className="sub-title-icon d-flex align-items-center">
          <span className="icon pe-7s-gym"></span>
          <h6>My Skills</h6>
        </div>
        <h4 className="fz-28 text-u fw-600">My Advantages</h4>
      </div>
      <div className="row wow fadeIn">
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
  );
}

export default Skills;
