import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./academicBackground.css";
import samriddhilogo from "../assets/samriddhilogo.jpg"
import broadway from "../assets/broadway.png"
const AcademicBackground = ({brightNess}) => {
  return (
    <Container style={{color:brightNess? "black":'white'}}>
      <h1 className="text-center custom-color py-5 my-5">
        Academic Background
      </h1>
      <div className="academic-box">
      <VerticalTimeline className="custom-vertical-timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            background: "inherit",
            boxShadow: "5px 5px 5px black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #f95654" }}
          date="2023-2028"
          iconStyle={{ background: "inherit", color: "#fff" }}
          icon={
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "50%",
              }}
              src={samriddhilogo}
              alt="logo"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">BSc CSIT</h3>
          <h5 className="vertical-timeline-element-subtitle text-secondary">
            Samriddhi College
          </h5>
          <br />
          <ul className="list-unstyled">
            <li>
              Currently pursuing a Bachelor of Science in Computer Science and Information Technology,
              gaining comprehensive knowledge in various IT domains.(Set to
              graduate in 2028){" "}
            </li>
            <br />
            <li>
            Studying data structures and algorithms to write efficient code, solve complex problems, and build a strong foundation for technical interviews and real-world applications
            </li>
            
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="October 2023 - Jan 2024"
          contentStyle={{
            background: "inherit",
            boxShadow: "5px 5px 5px  black",
          }}
          iconStyle={{ background: "inherit", color: "#fff" }}
          icon={
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "50%",
              }}
              src={broadway}
              alt="img"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Development
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-secondary">
            {" "}
            Broadway Infosys
          </h5>
          <br />
          <ul className="list-unstyled">
            <li>
              Successfully completed a front-end development coding bootcamp,
              gaining intensive and hands-on experience in web development.
            </li>
            <br />
            <li>
              Acquired proficiency in essential web development technologies,
              including HTML, CSS, and JavaScript.
            </li>
            <br />
            <li>
              Developed expertise in React.js, a popular JavaScript library for
              building user interfaces.
            </li>
           
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </Container>
  );
};

export default AcademicBackground;
