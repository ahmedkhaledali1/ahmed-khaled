import React from 'react';

function Navbar() {
  return (
    <div className="fixed-menu">
      <div className="menu-social text-u">
        <a href="#0" className="active" data-scroll-nav="0">
          <span className="icon fz-18 pe-7s-portfolio"></span>
          <span className="text">Demos</span>
        </a>
        <a
          href="https://themeforest.net/checkout/from_item/48676692?license=regular&support=bundle_6month"
          target="_blank"
        >
          <span className="icon fz-18 pe-7s-cart"></span>
          <span className="text nowrap">Buy Now</span>
        </a>
        <a href="#" target="_blank">
          <span className="icon fz-18 pe-7s-add-user"></span>
          <span className="text nowrap">Follow</span>
        </a>
        <a href="#0" className="mt-30">
          <i className="fab fa-behance"></i>
        </a>
        <a href="#0">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
