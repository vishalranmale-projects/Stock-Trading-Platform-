import { useState } from "react";
import axios from "axios";
export default function BuyActionWindow({ Name2, Price, Buy }) {
  let [Quantity, SetQuantity] = useState(1);
  let [Price2, SetPrice] = useState(Price);
  function handleQuantityChange(e) {
    SetQuantity(e.target.value);
    let newPrise = e.target.value * Price2;
    SetPrice(() => {
      return newPrise;
    });
  }
  async function handleBuy(e) {
    e.preventDefault();

    console.log("Buyed");
    let res = await axios.post("http://localhost:3000/addPositions", {
      name: Name2,
      qty: e.target.qty.value,
      price: e.target.price.value,
      mode: "BUY",
    });
  }

  return (
    <div className="container" style={{ height: "10rem", width: "15rem" }}>
      <form
        onSubmit={(e) => {
          handleBuy(e);
          Buy(false, Name2, Price);
        }}
      >
        <div className="row">
          <div className="col-6">
            <legend>Qty.</legend>
            <input
              min={1}
              onChange={(e) => {
                handleQuantityChange(e);
              }}
              style={{ height: "2rem", width: "7rem" }}
              type="number"
              name="qty"
              value={Quantity}
            ></input>
          </div>
          <div className="col-6">
            <legend>Price</legend>
            <input
              value={Price2}
              style={{
                height: "2rem",
                width: "7rem",
                marginLeft: "0.5rem",
              }}
              type="number"
              name="price"
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
  );
}
