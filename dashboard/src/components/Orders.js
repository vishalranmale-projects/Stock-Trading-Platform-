import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  let [allpositions, setallpositions] = useState([]);
  useEffect(() => {
    let positions;
    let fetchPositions = async () => {
      positions = await axios.get("http://localhost:3000/getOrders");
      positions = positions.data;
      setallpositions(positions);
    };
    fetchPositions();
  }, []);

  return allpositions.length > 0 ? (
    <>
      <h3 className="title">Orders ({allpositions.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price.</th>
            <th>Mode</th>
          </tr>
          {allpositions.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  ) : (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
