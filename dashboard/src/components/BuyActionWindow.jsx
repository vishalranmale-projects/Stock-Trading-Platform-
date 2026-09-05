import { useState } from "react";
import axios from "axios";
export default function BuyActionWindow({ BuyorSell, handlewindow, name, price }) {
  
  async function handleBuy(e) {
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/addOrders", {
      name: name,
      qty: e.target.qty.value,
      price: e.target.price.value,
      mode:  BuyorSell == 1 ? "BUY" : "SELL",
    });
  }
  let [price2,setprice] = useState(price)
  function handleqtychange(e){
    setprice(()=>{
      return price*e.target.value;
    })
  }
  return (
    <div className="container" style={{ height: "10rem", width: "15rem" }}>
      <form
        onSubmit={(e) => {
          handleBuy(e);
          
                 handlewindow(false);
            
        }}
      >
        <div className="row">
          <div className="col-6">
            <legend>Qty.</legend>
            <input
              min={1}
              style={{ height: "2rem", width: "7rem" }}
              type="number"
              name="qty"
              max={10}
             
              onChange={(e)=>{
                handleqtychange(e);
              }}
            ></input>
          </div>
          <div className="col-6">
            <legend>Price</legend>
            <input
              value={price2}
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
            {BuyorSell === 1 ? (
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
            ) : (
              <button
                style={{
                  width: "3rem",
                  height: "1.8rem",
                  backgroundColor: "skyblue",
                  marginleft: "10px",
                }}
              >
                Sell
              </button>
            )}

            <button
              style={{
                width: "4.5rem",
                height: "1.8rem",
                marginLeft: "5px",
              }}
              onClick={()=>{
                 handlewindow(false);
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
