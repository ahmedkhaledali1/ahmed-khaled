import React from 'react';

function About() {
  return (
    <div className="sec-box" data-scroll-index="0">
      <div className="bg"></div>

      <div className="content-box">
        <div className="hero">
          <div className="content">
            <h5 className="cd-headline slide">
              <span>Hello, I’m &nbsp;</span>
              <span className="cd-words-wrapper main-color">
                <b className="is-visible">Ahmed Khaled</b>
                <b>Full-stack Developer</b>
                {/* <b>UI/UX Designer</b> */}
              </span>
            </h5>
            <h1>
              I’m a<span className="bord">Full-stack Developer</span>
            </h1>
            <p className="text">
              As a Full-Stack Developer with tow years of experience, I have
              successfully implemented featured projects using Reactjs and
              nodejs. I specialize in Nextjs at creating responsive designs and
              delivering real projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
