import React from "react";
import Preloaderimg from "../assets/images/png/loading.jpg";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading z_999 bg-black"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <span className="z-15 w-50 d-flex flex-column justify-content-center align-items-center">
          <img 
            src={Preloaderimg}
            alt="Preloaderimg"
            className=" d-xl-block d-none wh_25"
          />
          <img
            src={Preloaderimg}
            alt="Preloaderimg"
            className="w-25 d-xl-none"
          />
          <div className="d-inline-block">
            <p className="ff_mont fs_xl text-white fw-semibold">
             cleauvmedia
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Preloader;
