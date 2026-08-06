import React from "react";
import "../public/Stylesheets/Navbar.css";
import { useState } from "react";
function Navbar() {
  let [click2, setclick] = useState(0);
  function handleClick(click, e) {
    e.preventDefault();
    setclick(click);
  }
  return (
    <nav className="navbar bg-white border">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:5173/">
          <img
            src="/public/Media/logo.svg"
            alt="Bootstrap"
            width="150"
            height="20"
            className="mb-1"
          ></img>
        </a>
        <div className="Navbar mt-2">
          <a
            style={{ color: click2 == 1 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(1, e);
            }}
            className="navbar-brand Navbartext"
            href="http://localhost:5173/signup"
          >
            Signup
          </a>
          <a
            style={{ color: click2 == 2 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(2, e);
            }}
            className="navbar-brand Navbartext"
            href="http://localhost:5173/support"
          >
            Support
          </a>
          <a
            style={{ color: click2 == 3 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(3, e);
            }}
            className="navbar-brand Navbartext"
            href="http://localhost:5173/pricing"
          >
            Pricing
          </a>
          <a
            style={{ color: click2 == 4 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(4, e);
            }}
            className="navbar-brand Navbartext"
            href="http://localhost:5173/products"
          >
            Products
          </a>
          <a
            style={{ color: click2 == 5 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(5, e);
            }}
            className="navbar-brand Navbartext"
            href="http://localhost:5173/about"
          >
            About
          </a>
          <a
            style={{ color: click2 == 6 ? "rgb(14, 111, 201)" : "black" }}
            className="navbar-brand Navbartext"
            href="#"
            onClick={(e) => {
              handleClick(6, e);
            }}
          >
            <i style={{ opacity: ".7" }} class="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
