import React from "react";
import "./Navbar.css";
import Logo from "../../assets/LogoLight.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="Logo" />

        <ul className="nav-ul">
            <li className="nav-li"><a href="#">Home</a></li>
            <li className="nav-li"><a href="#">About</a></li>
            <li className="nav-li"><a href="#">Services</a></li>
            <li className="nav-li"><a href="#">Projects</a></li>
            <li className="nav-li"><a href="#">Contact</a></li>
        </ul>

        <div className="social-icons-div">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook-f"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
