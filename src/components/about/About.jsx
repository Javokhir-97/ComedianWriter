import React from "react";
import "./about.css";
import CardLayers3d from "./CardLayers3d";

const About = () => {
  return (
    <div className="about" id="about">
      <CardLayers3d/>

      <div className="text">
        <h1>Hey, I am Jun</h1>
        <p>comedian and aspiring writer from South Korea, 
          I have been doing standup comedy for a long time and reading English literature longer.
          I am on Instagram and YouTube under the name lofty.aspiration.</p>
      </div>
    </div>
  );
};

export default About;
