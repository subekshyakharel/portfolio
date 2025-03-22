import React from "react";

import "./banner.css";

import img1 from "../assets/photo.jpeg";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons";
const Banner = () => {
  return (
    <div className="top">
      <div className="  banner">
        <div className="d-flex flex-column gap-3 content">
          {/* <h3 className="custom-color">Hello !</h3> */}
          <h1 className="title">FrontEnd Developer</h1>

          <p>
          I'm Subekshya Kharel, a passionate Front-End Developer dedicated to crafting robust, user-centric web solutions with a focus on both design and functionality.
          </p>
          {/* <div className=" info ">
            <button>Check My CV</button>
          </div> */}
          <div className="d-flex gap-4 mt-4 info">
            <a
              href="https://www.linkedin.com/in/subekshya-kharel-183b13295/"
              target="_blank"
            >
              <Linkedin size={40} color="#0b66c2" />
            </a>
            <a href="https://github.com/subekshyakharel" target="_blank">
              <Github size={40} color="orange" />
            </a>
            <a href="mailto: subekshyakhkarel922@gmail.com">
              <Envelope size={40} color="#0b66c2" />
            </a>
          </div>
        </div>
        <div className="img-container">
          {/* <img src={img1} alt="my-image" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
