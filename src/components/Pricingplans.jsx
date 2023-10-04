import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import check from "../assets/images/svg/check.svg";
import bookcall from "../assets/images/png/bookcall.png";
import refer from "../assets/images/png/refer earn.png";
import pricingred from "../assets/images/png/hero_red.png";

const Pricingplans = () => {
  return (
    <>
      <section className="bg_fade py-5  position-relative">
        <img className="pricingred scaleanimation" src={pricingred} alt="pricingred" />
        <Container className="pb-lg-5">
          <h2 className="text-center ff_mont fs_xl fw-semibold pt-xl-5">
            Pricing Plans
          </h2>
          <p className="text-center ff_mont fs_xsm pt-3 mb-0">
            We offer flexible and competitive pricing plans to suit your
            specific needs.
          </p>
          <Row className="py-5 mt-5">
            <Col
              xl={4}
              lg={6}
              className="pb-xl-0 pb-5 mb-2"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="d-flex flex-column p_32  pricing_border position-relative transition_400 h-100">
                <button className="plans_btn ff_raleway fs_sm fw-semibold transition_400 ">
                  Most Popular
                </button>
                <p className="ff_mont fs_md fw-semibold  text-black text-center pt-4">
                  monthly
                </p>
                <h4 className="ff_mont fs_xl text-black fw-medium text-center">
                  $1990<span className="fw-semibold fs_md">/month</span>
                </h4>
                <p className="ff_mont fw-normal fs_sm text-center mb-0">
                  Cancel anytime
                </p>
                <div className="d-flex align-items-center pt-5 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Full ownership of design
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1 ">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Pause or cancel anytime
                  </p>
                </div>
                <button className="get_button ff_mont fw-semibold fs_xsm mt-5 bg_fade">
                  Get Started
                </button>
              </div>
            </Col>
            <Col
              xl={4}
              lg={6}
              className="pb-xl-0 pb-5 mb-2"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="d-flex flex-column p_32  pricing_border position-relative transition_400 h-100">
                <button className="plans_btn ff_raleway fs_sm fw-semibold transition_400 ">
                  Paid Quarterly
                </button>
                <p className="ff_mont fs_md fw-semibold  text-black text-center pt-4">
                  Quarterly
                </p>
                <h4 className="ff_mont fs_xl text-black fw-medium text-center">
                  $1740<span className="fw-semibold fs_md">/month</span>
                </h4>
                <p className="ff_mont fw-normal fs_sm text-center mb-0">
                  Save $250 per month
                </p>
                <div className="d-flex align-items-center pt-5 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Full ownership of design
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1 opacity-0">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Full ownership of design
                  </p>
                </div>
                <button className="get_button ff_mont fw-semibold fs_xsm mt-5 bg_fade">
                  Get Started
                </button>
              </div>
            </Col>
            <Col
              xl={4}
              lg={6}
              className="pb-xl-0 pb-5 mb-2"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="d-flex flex-column p_32  pricing_border  position-relative transition_400 h-100">
                <button className="plans_btn ff_raleway fs_sm fw-semibold transition_400 ">
                  One Time Payment
                </button>
                <p className="ff_mont fs_md fw-semibold  text-black text-center pt-4">
                  Individual Project
                </p>
                <h4 className="ff_mont fs_xl text-black fw-medium text-center">
                  Contact Us
                </h4>
                <p className="ff_mont fw-normal fs_sm text-center mb-0">
                  Price depending on scale
                </p>
                <div className="d-flex align-items-center pt-5 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Brand identity
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Digital advertisement
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Web and Mobile design
                  </p>
                </div>
                <div className="d-flex align-items-center pt-2 pb-1 ">
                  <img src={check} alt="check" />
                  <p className="ff_mont fs_sm text-center mb-0 ps-2">
                    Social media campaign
                  </p>
                </div>
                <button className="get_button ff_mont fw-semibold fs_xsm mt-5 bg_fade">
                  Get Started
                </button>
              </div>
            </Col>
          </Row>
          <Row className="mt-xl-5 pt-xl-5">
            <Col
              md={6}
              className=" border_right pb-4"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="d-flex align-items-center justify-content-center flex-column px-5 h-100">
                <img className="pb-1" src={bookcall} alt="bookcall" />
                <h3 className="text-center ff_mont fs_lg mt-2 fw-semibold">
                  Book a Call
                </h3>
                <p className="ff_mont text-center fs_xsm">
                  Learn more about how Cleauv media works and how it can help
                  you.
                </p>
                <button className="bg_fade ff_mont fw-semibold fs_sm mybtn book_btn mt-1  btn_hover transition_400">
                  Book a Call
                </button>
              </div>
            </Col>
            <Col
              md={6}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="d-flex align-items-center justify-content-center flex-column px-5 h-100">
                <img className="pb-1" src={refer} alt="bookcall" />
                <h3 className="text-center ff_mont fs_lg fw-semibold mt-2">
                  Refer a friend & earn
                </h3>
                <p className="ff_mont text-center fs_xsm">
                  Earn 5% monthly recurring commissions <br /> for each
                  referral.
                </p>
                <button className="bg_fade ff_mont fw-semibold fs_sm mybtn book_btn mt-1  btn_hover transition_400">
                  Join Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pricingplans;
