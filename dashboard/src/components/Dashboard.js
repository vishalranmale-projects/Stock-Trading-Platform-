import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
// import { GeneralContextProvider } from "../context/GeneralContext";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BuyActionWindow from "./BuyActionWindow.jsx";

const Dashboard = () => {
  let [issell, setissell] = useState([]);
  function handlesell(value, Name, Price) {
    console.log(value + "" + Name + "" + Price);
    setissell([value, Name, Price]);
  }
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
      <WatchList sell={handlesell} />
      {/* </GeneralContextProvider> */}
      {issell[0] ? (
        <BuyActionWindow
          Buy={handlesell}
          Name2={issell[1]}
          Price={issell[2]}
        ></BuyActionWindow>
      ) : null}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
