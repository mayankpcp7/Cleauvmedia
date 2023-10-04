import React from "react";
import footerlogo from "../assets/images/webp/footerlogo.webp";
import { Facebook, Twitter, Instagram } from "./icons/Socialicons";
const Footer = () => {
  return (
    <>
      <footer className="bg_darkgrey">
        <div className="container">
          <div className="row py-5 justify-content-between">
            <div
              className="col-lg-4 col-md-5"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src={footerlogo} alt="footerlogo" />
              <p className="text-start ff_mont fw-normal fs_xsm  pt-3 pb-3 white_op70">
                Ut ut at mus facilisi semper at suscipit massa purus. Varius sed
                sollicitudin id aliquam hac tortor maecenas purus semper.
              </p>
              <div
                className="flex align-items-center pt-1
              "
              >
                <a
                  className="pe-2 "
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FCleauvInc"
                >
                  <Twitter />
                </a>
                <a
                  className="ps-1 pe-2"
                  href="https://www.facebook.com/cleauvmedia/"
                >
                  <Facebook />
                </a>
                <a
                  className="ps-1"
                  href="https://www.instagram.com/cleauvmedia/reels/"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 ">
              <div
                className="row  justify-content-between pt-md-0 pt-5"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="col-sm-4 col-6">
                  <ul className="ps-0 w_50">
                    <h3 className="ff_mont fs_xsm text-white mb-3">
                      Quick Links
                    </h3>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li className="cursor_pointer white_op70">About</li>
                    <li>
                      <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="#service">Service</a>
                    </li>
                    <li>
                      <a href="#fAQ">Faq</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-6">
                  <ul className="ps-md-0 w_50">
                    <h3 className="ff_mont fs_xsm text-white mb-3">Company</h3>
                    <li className="cursor_pointer white_op70">Careers</li>
                    <li className="cursor_pointer white_op70">Security</li>
                    <li className="cursor_pointer white_op70"> Legal</li>
                  </ul>
                </div>
                <div className="col-sm-4 col-6">
                  <ul className="ps-0 w_50">
                    <h3 className="ff_mont fs_xsm text-white mb-3">
                      Contact us
                    </h3>
                    <li className="cursor_pointer white_op70">
                      info@cleauv media.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_line"></div>
        <p className="ff_mont text-white cursor_pointer mb-0 text-center py-3">
          Copyright@Cleauvmedia.2023
        </p>
      </footer>
    </>
  );
};

export default Footer;
