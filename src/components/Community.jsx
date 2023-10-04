import React from "react";
import { Communitycards } from "./Helper";
import Slider from "react-slick";
import bluevec from "../assets/images/webp/hero_blue.webp";
const Community = () => {
  var settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerpadding: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          centerpadding: false,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-white py-5 position-relative mb-5 z_10">
        <img className="faq_blue scaleanimation" src={bluevec} alt="bluevector" />
        <h2 className="text-black text-center fs_xl fw-semibold ff_mont pt-lg-5">
          What Our Customer Say
        </h2>
        <p className="text-center ff_mont fs_xsm pt-2 mb-5">
          We offer flexible and competitive pricing plans to suit your specific
          needs.
        </p>
        <Slider
          {...settings}
          className="community py-4"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {Communitycards.map((custemor) => {
            return (
              <div
                className="d-md-flex  align-items-start border border-black rounded-3 p_30  yellowshadow_hover transition_400 "
                key={custemor.id}
              >
                <div className="d-flex  align-items-center mb-3">
                  {" "}
                  <img className="wh_72" src={custemor.pic} alt="custemor" />
                  <div className="ps-3 ps-md-0">
                    <h4 className="ff_mont fw-semibold fs_md mb-0 d-md-none">
                      {custemor.name}
                    </h4>
                    <p className="white_op50 ff_mont fw-normal fs_xsm d-md-none mb-0">
                      {custemor.proffesion}
                    </p>
                  </div>
                </div>

                <div className="flex flex-column ps-md-5">
                  <h4 className="ff_mont fw-semibold fs_md mb-0 d-none d-md-block">
                    {custemor.name}
                  </h4>
                  <p className="white_op50 ff_mont fw-normal fs_xsm d-none d-md-block">
                    {custemor.proffesion}
                  </p>
                  <p className="ff_mont fw-normal mb-0 fs_xsm">
                    {custemor.about}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Community;
