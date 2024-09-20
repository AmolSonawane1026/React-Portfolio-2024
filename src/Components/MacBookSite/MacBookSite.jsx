import React from "react";
import "./MacBookSite.css";
import MacbookImg from "../../assets/MacBookSite.png";
const MacBookSite = () => {
  return (
    <>
      <div className="MacBookMainDiv">
      <svg xmlns="http://www.w3.org/2000/svg" className="blob" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 450" opacity="0.92"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="91" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="232.5" ry="80" cx="398.0864286704075" cy="230.33285089087315" fill="#f08553"></ellipse></g></svg>
      <img src={MacbookImg} alt="Macbook image" className="leftImg"/>
      <img src={MacbookImg} alt="Macbook image" className="centerImg"/>
      <img src={MacbookImg} alt="Macbook image" className="rightImg"/>
      </div>
    </>
  );
};

export default MacBookSite;
