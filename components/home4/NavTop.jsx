'use client';
import React, { useEffect } from 'react';

function NavTop() {
  useEffect(() => {
    const applyRollingTextEffect = () => {
      let elements = document.querySelectorAll('.rolling-text');

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = '';

        let textContainer = document.createElement('div');
        textContainer.classList.add('block');

        for (let letter of innerText) {
          let span = document.createElement('span');
          span.innerText = letter.trim() === '' ? '\xa0' : letter;
          span.classList.add('letter');
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

      elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
          element.classList.remove('play');
        });
      });
    };

    applyRollingTextEffect();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg pt-30">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-6">
              <div>
                <a
                  style={{ fontSize: '25px', fontWeight: '700' }}
                  className="logo "
                  href="#"
                >
                  Ahmed
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="d-flex justify-content-end text-u">
                <a href="mailto:ahmed.khaled01233@gmail.com">
                  ahmed.khaled01233@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed-menu">
        <div className="menu-links mb-30 fz-18">
          <a href="#home" className="active" data-tab="tab-1">
            <span className="icon pe-7s-home"></span>
            <span className="text">Home</span>
          </a>
          <a href="#home" data-tab="tab-2">
            <span className="icon pe-7s-portfolio"></span>
            <span className="text">Portfolio</span>
          </a>
          <a href="#home" data-tab="tab-3">
            <span className="icon pe-7s-note"></span>
            <span className="text">Blog</span>
          </a>
          <a href="#home" data-tab="tab-4">
            <span className="icon pe-7s-map-marker"></span>
            <span className="text">Contact</span>
          </a>
        </div>
        <div className="menu-social">
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavTop;
