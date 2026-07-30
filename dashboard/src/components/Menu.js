import { useState } from "react";
import React from "react";
// import { handleProfileClick } from "../utils/someFile";
const Menu = () => {
  let [selectedMenue, setselectedMenue] = useState(0);
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a
              href="/orders"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Orders</p>
            </a>
          </li>
          <li>
            <a
              href="/holdings"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Holdings</p>
            </a>
          </li>
          <li>
            <a
              href="positions"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Positions</p>
            </a>
          </li>
          <li>
            <a href="funds" style={{ textDecoration: "none", color: "black" }}>
              <p>Funds</p>
            </a>
          </li>
          <li>
            <a href="apps" style={{ textDecoration: "none", color: "black" }}>
              <p>Apps</p>
            </a>
          </li>
        </ul>
        <hr />

        <div className="avatar">ZU</div>
        <p className="username">USERID</p>
      </div>
    </div>
  );
};

export default Menu;
