import React from "react";
import "./home.css";
import Image1 from "../../assets/photo_6233093248944029235_y.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container">
        <div className="div1">

          <h1>I love standup comedy and literature</h1>
          <p>
            Why did the chicken cross the road?
            <br /> Cause he was Christian chicken{" "}
          </p>

        </div>

         <img src={Image1} alt="Jun" />

      </div>
    </section>
  );
};

export default Home;
