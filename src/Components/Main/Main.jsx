import React from "react";
import "./Main.css";
import BgVideo from "../../assets/Videos/BgVideo1.mp4";
const Main = () => {
  return (
    <>
      <main className="main-div">
        <div className="overlay"></div>
        <video autoPlay loop muted className="background-video">
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Your Text Here</h1>
          <p>Some description or subtext can go here.</p>
        </div>
      </main>
    </>
  );
};

export default Main;
