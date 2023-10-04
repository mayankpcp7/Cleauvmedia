import React from "react";
import Mynav from "./Mynav";
import red from "../assets/images/webp/hero_red.webp";
import blue from "../assets/images/webp/hero_blue.webp";
import green from "../assets/images/webp/hero_green.webp";
import yellow from "../assets/images/webp/hero_yellow.webp";
import semivec from "../assets/images/webp/half_round_vec.webp";
import roundvec from "../assets/images/webp/round_vec.webp";
import linevec from "../assets/images/webp/line_vec.webp";
import wifivec from "../assets/images/webp/wifi_vec.webp";
const Hero = () => {
  return (
    <>
      <header className="vh-100 d-flex flex-column overflow-hidden" id="home">
        <Mynav />
        <section className="bg_black d-flex flex-column align-items-center justify-content-center flex-grow-1 h-100 position-relative overflow-hidden">
          <img
            data-aos="fade-down-right"
            data-aos-delay="3000"
            data-aos-duration="2000"
            className="blue blue_wh_sm scaleanimation"
            src={blue}
            alt="blue"
          />
          <img
            data-aos="fade-down-left"
            data-aos-delay="3000"
            data-aos-duration="2000"
            className="red red_wh_sm scaleanimation"
            src={red}
            alt="herored"
          />
          <img
            data-aos="fade-down-left"
            data-aos-delay="3000"
            data-aos-duration="2000"
            className="green green_wh_sm scaleanimation"
            src={green}
            alt="green"
          />
          <img
            data-aos="fade-up-left"
            data-aos-delay="3000"
            data-aos-duration="2000"
            className="yellow yellow_wh_sm scaleanimation "
            src={yellow}
            alt="yellow"
          />
          <img className="semivec tiltanimation" src={semivec} alt="vector" />
          <img className="round tiltanimation2" src={roundvec} alt="vector" />
          <img className="line tiltanimation2" src={linevec} alt="vector" />
          <img className="wifi tiltanimation" src={wifivec} alt="vector" />
          <div className="hero_layer"></div>
          <div
            className="container d-flex flex-column align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            <h1 className="text-center ff_mont fs_xxl text-white fw-semibold mw_802  text-center">
              Our Agency Brings Your Vision to Life
            </h1>
            <p className="text-center ff_mont fw-normal  mw_730 pt-3 fs_xsm white_op90">
              At Cleauv Media, we are all about creativity. Our team of experts
              specializes in delivering innovative solutions that capture the
              essence of your brand and bring it to life in new and exciting
              ways.
            </p>
            <button className="mybtn bg_yellow ff_mont fw-semibold text-white border_none mt-4">
              Contact Us
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
