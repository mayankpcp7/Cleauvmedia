import React from "react";
import card1 from "../assets/images/webp/card1.webp";
import card2 from "../assets/images/webp/card2_1.webp";
import card3 from "../assets/images/webp/card3_1.webp";
import Slider from "react-slick";
const Cards = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerpadding: "10%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10%",
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg_fade py-5 overflow-hidden"id="content">
        <Slider className="flex align-items-center px-2 py-5" {...settings}>
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3"
            src={card1}
            alt="card1"
          />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3 "
            src={card2}
            alt="card2"
          />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3"
            src={card3}
            alt="card3"
          />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3"
            src={card1}
            alt="card1"
          />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3 "
            src={card2}
            alt="card2"
          />
          <img
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-100 px-3"
            src={card3}
            alt="card3"
          />
        </Slider>
      </section>
    </>
  );
};

export default Cards;
