import mongoose from "mongoose";
const positionsSchema = mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const positionsModel = new mongoose.model("position", positionsSchema);
export default positionsModel;
