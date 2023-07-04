import React from "react";
import logo from "../assets/logo.png";
// import background from "../assets/background.png"
import "../App.css";
import Buttons from "./Buttons";
export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div className="navbarAnker">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Faq</a>
          <a href="/">Payments</a>
        </div>
      </nav>
      <div className="belowNav">
        <div>
          <h3 style={{ marginTop: "30px" }}>Food App</h3>
          <h1>
            Why stay hungary when you can <br />
            order from Bella Olonje
          </h1>
          <h3>Download the Bella Olonje app now</h3>
        <Buttons></Buttons>
        </div>      
      </div>
    </>
  );
}
