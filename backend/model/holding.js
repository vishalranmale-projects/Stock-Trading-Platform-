import mongoose from "mongoose";

let holdingSchema = mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
});

const holding = new mongoose.model("holding", holdingSchema);
export default holding;
