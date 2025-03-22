import React, { useState } from "react";
import Landingpage from "./Pages/Landingpage";
import About from "./Pages/About";
import Header from "./Component/Header";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import AcademicBackground from "./Pages/AcademicBackground";

const App = () => {
  const [brightNess, setBrightNess] = useState(true);
  const toggleBrightness = () => {
    setBrightNess(prevBrightness => !prevBrightness);
  };
  return (
    <div
      className="webpage"
      style={{
        background: brightNess ? "white" : "var(--primary-color)",
        color: brightNess ? "black " : "white ",
      }}
    >
      
        <Header brightNess={brightNess} setBrightNess={toggleBrightness} />
      

      <Landingpage brightNess={brightNess} />
 
      <Skill brightNess={brightNess} />
      <Project brightNess={brightNess}  />
      <AcademicBackground brightNess={brightNess}  />
      <About brightNess={brightNess}  />
      <Contact brightNess={brightNess}  />
      
    </div>
  );
};

export default App;
