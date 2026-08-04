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

const Dashboard = () => {
  let [issell, setissell] = useState(false);
  function handlesell(value) {
    setissell(value);
  }
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
      <WatchList sell={handlesell} />
      {/* </GeneralContextProvider> */}
      {issell ? (
        <div className="container" style={{ height: "10rem", width: "15rem" }}>
          <form>
            <div className="row">
              <div className="col-6">
                <input style={{ height: "2rem", width: "7rem" }}></input>
              </div>
              <div className="col-6">
                <input
                  style={{
                    height: "2rem",
                    width: "7rem",
                    marginLeft: "0.5rem",
                  }}
                ></input>
              </div>
            </div>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-6">
                <p style={{ fontSize: "0.6rem" }}>
                  <b>Margin required $140.65</b>
                </p>
              </div>
              <div className="col-6">
                <button
                  style={{
                    width: "3rem",
                    height: "1.8rem",
                    backgroundColor: "skyblue",
                    marginleft: "10px",
                  }}
                >
                  Buy
                </button>
                <button
                  style={{
                    width: "4.5rem",
                    height: "1.8rem",
                    marginLeft: "5px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
      ;
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
