import { useState } from "react";
import { Nav } from "react-bootstrap";
import navlogo from "../assets/images/webp/navlogo.webp";
import Navopen from "./icons/Navopen";
import navclose from "../assets/images/svg/closebtn.svg";
const Mynav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav className="py-3 bg_darkgrey nav">
          <div className=" container d-flex justify-content-between align-items-center">
            <img className="cursor_pointer" src={navlogo} alt="navlogo" />
            <ul className="d-lg-flex gap-4 mb-0 d-none  align-items-center">
              <li className="navline ">
                <a href="#home">Home</a>
              </li>
              <li className="navline ">
                <a href="#about">About</a>
              </li>
              <li className="navline ">
                <a href="#service">Services</a>
              </li>
              <li className="navline ">
                <a href="#content">Content</a>
              </li>
              <li className="navline ">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
            <button className="mybtn d-none d-lg-block white_border ff_mont text-white fw-normal fw-semibold">
              Login
            </button>
            <div
              className="d-flex justify-content-between flex-column d-lg-none menu_box z_index_100 position-relative z_50"
              onClick={showNav}
            >
              {show ? (
                <Navopen />
              ) : (
                <img
                  
                  src={navclose}
                  alt="card1"
                />
              )}
            </div>
            <ul
              className={`d-flex align-items-center justify-content-center gap-4 mb-0 sm_nav mb-0 ps-0 d-lg-none bg_black ${
                show ? "" : "start-0"
              }`}
            >
              <li>
                <img className="mb-5 pb-5" src={navlogo} alt="navlogo" />
              </li>
              <li className= "w-50 d-flex  justify-content-center px-5 pb-4 align-items-center border_bottom">
                <a href="you.com">Home</a>
              </li>
              <li className= "w-50 d-flex  justify-content-center px-5 pb-4 align-items-center border_bottom">
                <a href="you.com">About</a>
              </li>
              <li className= "w-50 d-flex  justify-content-center px-5 pb-4 align-items-center border_bottom">
                <a href="you.com">Services</a>
              </li>
              <li className= "w-50 d-flex  justify-content-center px-5 pb-4 align-items-center border_bottom">
                <a href="you.com">Content</a>
              </li>
              <li className= "w-50 d-flex  justify-content-center px-5 pb-4 align-items-center border_bottom">
                <a href="you.com">FAQ</a>
              </li>
            </ul>
          </div>
        </Nav>
      </>
    </>
  );
};

export default Mynav;
