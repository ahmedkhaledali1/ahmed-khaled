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
    <nav className="navbar navbar-chang navbar-expand-lg">
      <div className="container position-re">
        <div className="row">
          <div className="col-lg-3 col-6 order1">
            <div className="bord">
              <a className="logo icon-img-70" href="#">
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Ahmed
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order3">
            <div className="bg">
              <div className="full-width">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#0" data-scroll-nav="0">
                      <span className="rolling-text">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0" data-scroll-nav="1">
                      <span className="rolling-text">About</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0" data-scroll-nav="2">
                      <span className="rolling-text">Services</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0" data-scroll-nav="3">
                      <span className="rolling-text">Portfolio</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#0" data-scroll-nav="5">
                      <span className="rolling-text">Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 order2">
            <div className="bord d-flex justify-content-end">
              <ul className="social d-flex rest">
                <li>
                  <a href="https://www.linkedin.com/in/ahmed-khaled-8b0a52251/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ahmedkhaledali1">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100094199711505">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
              <button className="navbar-toggler" type="button">
                <span className="icon-bar">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTop;
