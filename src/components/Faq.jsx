import React from "react";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import greenvec from "../assets/images/png/hero_green.png";
const Faq = () => {
  return (
    <>
      <section className="bg-white py-5 mb-lg-5 position-relative overflow-hidden">
        <img className="faq_green scaleanimation" src={greenvec} alt="greenvector" />
        <Container className=" pb-sm-5 mb-5">
          <h2 className="text-center ff_mont fs_xl py-5 fw-semibold ">
            Frequently Asked Questions
          </h2>

          <Accordion
            defauljustify-content-centertActivekey="1"
            className=" mb-lg-5 mw_879"
          >
            <Accordion.Item
              className="border_bottom_07  px-2"
              evenKey="0"
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q1. What does “unlimited requests” mean?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="1"
              className="border_bottom_07  px-2"
              data-aos="zoom-out-up"
              data-aos-duration="2200"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q2. What makes your creative studio/marketing agency unique?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  At Cleauv Media Inc, we pride ourselves on our holistic
                  approach to creative services and marketing. We offer a
                  comprehensive suite of services, including web build,
                  branding, content creation, paid advertising, and business
                  automation. Our team of experts combines creativity with
                  strategic thinking to deliver tailored solutions that drive
                  results for our clients.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border_bottom_07  px-2"
              eventKey="2"
              data-aos="zoom-out-up"
              data-aos-duration="2400"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q3. Can you handle projects of different sizes?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quibusdam reprehenderit mollitia nulla nobis, eum
                  architecto quam. Soluta eaque animi consectetur. Minima
                  aspernatur, nihil numquam excepturi consequatur repellendus
                  veritatis asperiores.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border_bottom_07  px-2"
              eventKey="3"
              data-aos="zoom-out-up"
              data-aos-duration="2600"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q4. How do you ensure the quality of your work?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border_bottom_07  px-2"
              eventKey="4"
              data-aos="zoom-out-up"
              data-aos-duration="2800"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  How to participate in the pump using Binance and TrustWallet?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border_bottom_07  px-2"
              eventKey="5"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  How to participate if u don’t have Binance?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              className="border_bottom_07  px-2"
              eventKey="6"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q5. How do I get started with your services?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="0"
              defaultActivekey="1"
              className="px-2"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <Accordion.Header>
                <h4 className="ff_mont fw-semibold text-black fs_sm">
                  Q6. How does your business model work?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  quia ipsam obcaecati beatae porro iusto vero asperiores,
                  dolore eveniet quidem est ratione iure nisi, dolores placeat
                  eum officiis voluptate aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Faq;
