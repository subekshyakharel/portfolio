import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./project.css";
import trailerworld from "../assets/trailerworld.png";
const Project = ({ brightNess }) => {

  return (
    <Container
      className=" project"
      style={{ color: brightNess ? "black" : "white" }}
      id="project"
    >
      <h1 className="text-center custom-color py-5 my-5">My Latest Projects</h1>

      <div className="projectContainer">
        <div className="projectSection1 px-4">
          <div className="img d-flex justify-content-center align-items-center">
            <img width={"100%"} src={trailerworld} alt="project_image" />
          </div>
          <div className="description d-flex flex-column gap-4">
            <h5 className="fw-bold text-center">Trailer World</h5>
            <p className="text-center" style={{ margin: 0 }}>
            TrailerWorld is a web application that enables users to search for movies by title and watch their trailers.
Built with React and integrated with the TMDB API, it provides a simple yet effective platform for exploring movie options and enjoying trailers.

            </p>
            <div className="fw-bold d-flex gap-3 flex-nowrap justify-content-center">
              <div>React</div>
              <div>API</div>
            </div>

            <div className="d-flex justify-content-center gap-4 ">
              <div>
                Code{" "}
                <a
                  href="https://github.com/subekshyakharel/TrailerWorld"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                Live Demo{" "}
                <a
                  href="https://trailer-world.vercel.app/"
                  target="_blank"
                  style={{ color: "inherit", fontSize: "25px" }}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
