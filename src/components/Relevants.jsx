import React from "react";
import relevantcard1 from "../assets/images/webp/relevant_1.webp";
import relevantcard2 from "../assets/images/webp/relevant2.webp";
import relevantcard3 from "../assets/images/webp/relevant3.webp";
import relevantblue from "../assets/images/webp/hero_blue.webp";
import relevantgreen from "../assets/images/webp/hero_green.webp";
import relevateddots from "../assets/images/webp/relevantdots.webp";
import Slider from "react-slick";

var myslider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerpadding: true,
  centerMode: true,
  centerPadding: "30%",
  
};
const Relevants = () => {
  return (
    <>
      <section className="bg-white py-sm-5  overflow-hidden position-relative relevated"id="about">
        <img className="relevateddots tiltanimation d-none d-sm-block" src={relevateddots} alt="dots" />
        <img className="relevantblue " src={relevantblue} alt="relevantblue" />
        <img
          className="relevantgreen scaleanimation"
          src={relevantgreen}
          alt="relevantgreen"
        />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center ff_mont fs_xl fw-semibold mt-md-5 pt-5">
            Relevant Works
          </h2>
          <p className="text-center ff_mont fs_xsm mw_697px pt-3 fw-normal mw_697 mb-0">
            Our team has successfully collaborated with a diverse range of
            clients across various industries, providing innovative solutions
            that address their unique challenges.
          </p>
        </div>

        <Slider className="d-none d-sm-flex py-5 " {...myslider}>
          <img
            className="relevatedcard w-100 "
            src={relevantcard1}
            alt="card1"
          />
          <img
            className="relevatedcard w-100  "
            src={relevantcard2}
            alt="card2"
          />
          <img
            className="relevatedcard w-100 "
            src={relevantcard3}
            alt="card3"
          />
          <img
            className="relevatedcard w-100 "
            src={relevantcard1}
            alt="card1"
          />
          <img
            className="relevatedcard w-100  "
            src={relevantcard2}
            alt="card2"
          />
          <img
            className="relevatedcard w-100 "
            src={relevantcard3}
            alt="card3"
          />
        </Slider>
        <div className="d-flex flex-column d-sm-none">
          <img className="w-100 py-3" src={relevantcard2} alt="card" />
          <img className="w-100 py-3" src={relevantcard1} alt="card" />
          <img className="w-100 py-3" src={relevantcard3} alt="card" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="bg_fade ff_mont mb-5   fw-semibold fs_sm mybtn mt-5 btn_hover transition_400">
            Book a Call
          </button>
        </div>
      </section>
    </>
  );
};

export default Relevants;
