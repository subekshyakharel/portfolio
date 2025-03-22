import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ brightNess, setBrightNess }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      expand="lg"
      variant="dark"
     
      style={{ background: brightNess ? "white" : "var(--primary-color)" }}
      expanded={expanded}
    >
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand
            href="#home"
            className={`menu ${brightNess ? "lightMode" : "darkMode"}`}
          >
            {" "}
            Subekshya
          </Navbar.Brand>
          <p className="p-0 m-0">
            {" "}
            {brightNess ? (
              <MdDarkMode
                className="fs-3"
                role="button"
                onClick={setBrightNess}
              />
            ) : (
              <MdOutlineLightMode
                className="fs-3"
                role="button"
                onClick={setBrightNess}
              />
            )}
          </p>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavbarToggle}
          color="black"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              href="#home"
              className={`menu fw-bold ${brightNess ? "lightMode" : "darkMode"}`}
              aria-controls="basic-navbar-nav"
              onClick={handleNavbarToggle}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={`menu fw-bold ${brightNess ? "lightMode" : "darkMode"}`}
              onClick={handleNavbarToggle}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={`menu fw-bold ${brightNess ? "lightMode" : "darkMode"}`}
              onClick={handleNavbarToggle}
            >
              Project
            </Nav.Link>

            <Nav.Link
              href="#about"
              className={`menu fw-bold ${brightNess ? "lightMode" : "darkMode"}`}
              onClick={handleNavbarToggle}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`menu fw-bold ${brightNess ? "lightMode" : "darkMode"}`}
              onClick={handleNavbarToggle}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
