import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Serviceitems } from "./Helper";
import servicediamond from "../assets/images/png/service_diamond.png";
import servicewifi from "../assets/images/png/service_wifi.png";
import servicedna from "../assets/images/png/service_dna.png";
import servicedots from "../assets/images/png/service_dots.png";
const Services = () => {
  return (
    <>
      <section className="bg_darkgrey py-lg-5 position-relative overflow-hidden">
        <div className="service_layer"></div>
        <img
          className="service_diamond tiltanimation"
          src={servicediamond}
          alt="servicediamond"
        />
        <img className="service_dna tiltanimation2" src={servicedna} alt="servicedna" />
        <div className="service_downlayer"></div>
        <img className="service_wifi tiltanmation2" src={servicewifi} alt="service_wifi" />
        <img className="service_dots tiltanimation" src={servicedots} alt="servicedots" />
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center pt-5 ">
            <h2 className="ff_mont fs_xl font-semibold text-white text-center fw-semibold ">
              Services
            </h2>
            <p className="white_op90 text-center font-normal ff_mont mw_612">
              Exceptional services that redefine excellence, exceeding
              expectations every time.
            </p>
          </div>
          <Row className="my-5">
            {Serviceitems.map((items) => {
              return (
                <Col
                  md={6}
                  lg={4}
                  xl={3}
                  key={items.id}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <p className="text-white ff_mont  fw-semibold service_options mb-0 mb-4 text-center text-md-start transition_400 cursor_pointer">
                    {items.matter}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
