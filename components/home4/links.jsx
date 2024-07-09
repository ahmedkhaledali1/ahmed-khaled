import React from 'react';

function Links() {
  return (
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
  );
}

export default Links;
