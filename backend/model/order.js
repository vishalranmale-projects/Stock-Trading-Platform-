import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const orderModel = new mongoose.model("Order", orderSchema);
export default orderModel;
