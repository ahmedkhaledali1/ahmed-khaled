import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg pt-30 pb-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-6">
            <div>
              <a
                style={{ fontSize: '25px', fontWeight: '700' }}
                className="logo"
                href="#"
              >
                Ahmed
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="d-flex justify-content-end text-u">
              <a
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: 'none',
                  outline: 'none',
                  overflow: 'auto',
                  overflowWrap: 'break-word',
                  Width: '200px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  wordBreak: 'break-all',
                }}
                href="mailto:ahmed.khaled01233@gmail.com"
              >
                ahmed.khaled01233@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
