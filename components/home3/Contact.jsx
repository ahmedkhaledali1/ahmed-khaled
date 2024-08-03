import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding" data-scroll-index="5">
      <div className="container">
        <div className="sec-head mb-80 wow fadeIn">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-inline-block">
                <div className="sub-title-icon d-flex align-items-center">
                  <span className="icon pe-7s-map-marker"></span>
                  <h6>Contact Us</h6>
                </div>
              </div>
              <h3>Let&#39;s Get in Touch!</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 valign wow fadeIn" data-wow-delay=".2s">
            <div className="info full-width md-mb80">
              <div className="item mb-30 d-flex align-items-center">
                <div className="mr-15">
                  <span className="icon fz-40 main-color pe-7s-call"></span>
                </div>
                <div className="mr-10">
                  <h6 className="opacity-7">Phone</h6>
                </div>
                <div className="ml-auto">
                  <h4>+2 0127 809 3760</h4>
                </div>
              </div>
              <div className="item mb-30 d-flex align-items-center">
                <div className="mr-15">
                  <span className="icon fz-40 main-color pe-7s-mail"></span>
                </div>
                <div className="mr-10">
                  <h6 className="opacity-7">Email</h6>
                </div>
                <div className="ml-auto">
                  <h4>
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
                  </h4>
                </div>
              </div>
              <div className="item d-flex align-items-center">
                <div className="mr-15">
                  <span className="icon fz-40 main-color pe-7s-map-marker"></span>
                </div>
                <div className="mr-10">
                  <h6 className="opacity-7">Address</h6>
                </div>
                <div className="ml-auto">
                  <h4>Egypt, Bani Suaif</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign wow fadeIn" data-wow-delay=".4s">
            <div className="full-width">
              <form id="contact-form">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label>Your Name</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label>Your Email</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea
                        id="form_message"
                        name="message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button>
                        <span className="text">Send A Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
