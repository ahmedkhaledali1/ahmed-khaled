import React from 'react';

function Hero() {
  return (
    <div className="hero-min pt-80 pb-80">
      <div className="cont">
        <h6>
          <span></span> Available For Freelancer
        </h6>
        <h1>
          Hey, I’m <br /> Ahmed Khaled
        </h1>
        <div className="d-flex align-items-center mt-30">
          <div className="mr-15">
            <div className="feat">
              <span>Back-End Developer</span>
            </div>
          </div>
          <div className="mr-15">
            <div className="feat">
              <span>Front-End Developer</span>
            </div>
          </div>
          <div>
            <div className="feat">
              <span>Full-stack Developer</span>
            </div>
          </div>
        </div>
        <div className="text mt-30">
          <p>
            As an accomplished Full-Stack Developer with two years of hands-on
            experience, I have skillfully executed various projects utilizing
            React.js, and Node.js. My expertise lies particularly in Next.js,
            where I excel at crafting responsive designs and successfully
            delivering impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
