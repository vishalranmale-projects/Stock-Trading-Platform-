import React from "react";
import "../../public/Stylesheets/Award.css";
function Awards() {
  return (
    <div className="container">
      <div className="row gx-5">
        <div className="col-6">
          <div className="row">
            <img src="/Media/largestBroker.svg" className="image"></img>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <h2>Largest stock broker in india</h2>
          </div>
          <div className="row">
            <p className="para">
              2+ million Zerodha clients contribute to over 15% of all retail
              order voloumes in india daily by traiding and investing in:
            </p>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li className="list">Futures and Options</li>
                <li className="list">Commodity derivatives</li>
                <li className="list">Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list">
                <li className="list">Stocks & IPOS</li>
                <li className="list">Direct mutual funds</li>
                <li className="list">Bonds</li>
              </ul>
            </div>
          </div>
          <img src="/public/Media/pressLogos.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
