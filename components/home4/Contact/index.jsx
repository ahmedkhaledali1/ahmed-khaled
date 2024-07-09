import React from 'react';

function Contact() {
  return (
    <div className="min-sec" id="tab-4">
      <div className="contact pt-80 pb-80">
        <div className="sec-head mb-50 wow fadeIn">
          <div className="sub-title-icon d-flex align-items-center">
            <span className="icon pe-7s-map-marker"></span>
            <h6>Contact Me</h6>
          </div>
        </div>

        <div className="info mb-100 wow fadeIn">
          <div className="row">
            <div className="col-lg-6">
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
            </div>
            <div className="col-lg-6">
              <div className="item mb-30 d-flex align-items-center">
                <div className="mr-15">
                  <span className="icon fz-40 main-color pe-7s-mail"></span>
                </div>

                <div style={{ overflow: 'hidden' }}>
                  <h4>
                    <a
                      style={{ fontSize: '12px' }}
                      href="mailto:ahmed.khaled01233@gmail.com"
                    >
                      ahmed.khaled01233@gmail.com
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item d-flex align-items-center">
                <div className="mr-15">
                  <span className="icon fz-40 main-color pe-7s-map-marker"></span>
                </div>
                <div className="mr-10">
                  <h6 className="opacity-7">Address</h6>
                </div>
                <div className="ml-auto">
                  <h4>Egypt, Bani-suaif</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-head mb-50 wow fadeIn">
          <div className="d-inline-block">
            <div className="sub-title-icon d-flex align-items-center">
              <span className="icon pe-7s-map-marker"></span>
              <h6>Contact Me</h6>
            </div>
          </div>
          <h4 className="fz-28 text-u fw-600">Let&#39;s Talk With Us!</h4>
        </div>
        <div className="full-width wow fadeIn">
          <form id="contact-form">
            <div className="messages"></div>

            <div className="controls row">
              <div className="col-lg-6">
                <div className="form-group mb-30">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group mb-30">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Your Message"
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
  );
}

export default Contact;
