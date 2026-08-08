import React from "react";
import "../public/Stylesheets/Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  let [click2, setclick] = useState(0);
  function handleClick(click, e) {
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
          <Link
            to={"http://localhost:5173/signup"}
            style={{ color: click2 == 1 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(1, e);
            }}
            className="navbar-brand Navbartext"
          >
            Signup
          </Link>
          <Link
            to={"http://localhost:5173/support"}
            style={{ color: click2 == 2 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(2, e);
            }}
            className="navbar-brand Navbartext"
          >
            Support
          </Link>
          <Link
            style={{ color: click2 == 3 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(3, e);
            }}
            className="navbar-brand Navbartext"
            to={"http://localhost:5173/pricing"}
          >
            Pricing
          </Link>
          <Link
            to={"http://localhost:5173/products"}
            style={{ color: click2 == 4 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(4, e);
            }}
            className="navbar-brand Navbartext"
          >
            Products
          </Link>
          <Link
            to={"http://localhost:5173/about"}
            style={{ color: click2 == 5 ? "rgb(14, 111, 201)" : "black" }}
            onClick={(e) => {
              handleClick(5, e);
            }}
            className="navbar-brand Navbartext"
          >
            About
          </Link>
          <Link
            style={{ color: click2 == 6 ? "rgb(14, 111, 201)" : "black" }}
            className="navbar-brand Navbartext"
            to={"#"}
            onClick={(e) => {
              handleClick(6, e);
            }}
          >
            <i style={{ opacity: ".7" }} class="fa-solid fa-bars"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
