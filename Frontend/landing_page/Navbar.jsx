import React from "react";
import "../public/Stylesheets/Navbar.css";
function Navbar() {
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
            className="navbar-brand Navbartext"
            href="http://localhost:5173/signup"
          >
            <p>Signup</p>
          </a>
          <a
            className="navbar-brand Navbartext"
            href="http://localhost:5173/support"
          >
            <p>Support</p>
          </a>
          <a
            className="navbar-brand Navbartext"
            href="http://localhost:5173/pricing"
          >
            <p>Pricing</p>
          </a>
          <a
            className="navbar-brand Navbartext"
            href="http://localhost:5173/products"
          >
            <p>Products</p>
          </a>
          <a
            className="navbar-brand Navbartext"
            href="http://localhost:5173/about"
          >
            <p>About</p>
          </a>
          <a className="navbar-brand Navbartext" href="#">
            <p>
              <i style={{ opacity: ".7" }} class="fa-solid fa-bars"></i>
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
