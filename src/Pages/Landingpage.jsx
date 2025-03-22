import React from "react";
import "./landingpage.css";
import { Container, Nav } from "react-bootstrap";
import Banner from "../Component/Banner";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Landingpage = ({ brightNess }) => {
  return (
    <div
      className="landing "
      style={{ color: brightNess ? "black" : "white" }}
      id="home"
    >
      <Container>
        <Banner />
      </Container>
      <div style={{ textAlign: "center" }}>
        <Nav.Link href="#skill">
          <MdOutlineKeyboardDoubleArrowDown
            className="arrow"
            fontSize={"50px"}
          />
        </Nav.Link>
      </div>
    </div>
  );
};

export default Landingpage;
