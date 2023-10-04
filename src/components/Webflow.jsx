import React from "react";
import webgreen from "../assets/images/png/webflow_green.png";
import webblue from "../assets/images/png/webflow_blue.png";
import webwifi from "../assets/images/png/webwifi.png";
const Webflow = () => {
  return (
    <>
      <section className="bg_darkgrey py-5 position-relative overflow-hidden position-relative ">
        <div
          className="container"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          <img className="web_wifi tiltanimation" src={webwifi} alt="webwifi" />
          <img className="webgreen scaleanimation" src={webgreen} alt="webgreen" />
          <img className="webblue z_20 scaleanimation" src={webblue} alt="webblue" />
          <div className="webflowlayer_left webflowlayer"></div>
          <div className="webflowlayer_right webflowlayer"></div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="mt-sm-5 add_btn ff_raleway text-white fw-semibold fs_md">
              Add On
            </button>
            <h2 className="text-center ff_mont fs_xl fw-semibold pt-3 text-white">
              Webflow development
            </h2>
            <p className="text-center white_op90 ff_mont fw-normal pt-2">
              Get a better website faster with Webflow development. Requires a
              design subscription.
            </p>
            <p className="text-center color_yellow ff_mont fw-semibold fs_lg pb-xl-5 mb-0 mb-sm-3">
              $999/m
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webflow;
