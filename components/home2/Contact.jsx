import React from 'react';

function Contact() {
  return (
    <div className="sec-box" data-scroll-index="4">
      <div className="bg"></div>

      <div className="content-box">
        <div className="contact">
          <div className="sec-head mb-80 wow fadeInUp">
            <div className="d-inline-block">
              <div className="sub-title-icon d-flex align-items-center">
                <span className="icon pe-7s-map-marker"></span>
                <h6>Contact Us</h6>
              </div>
            </div>
            <h3>Let&apos;s make your brand brilliant!</h3>
          </div>
          <div className="full-width wow fadeInUp" data-wow-delay=".5s">
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
    </div>
  );
}

export default Contact;
