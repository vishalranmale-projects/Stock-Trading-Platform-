import mongoose from "mongoose";
import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import holding from "./model/holding.js";
import positionsModel from "./model/positions.js";
import orderModel from "./model/order.js";
import { holdings } from "../dashboard/src/data/data.js";
import { positions } from "../dashboard/src/data/data.js";
import cors from "cors";

configDotenv();
const app = express();

app.listen(3000, () => {
  console.log("Backend Server is Listening on An Port 3000");
});
app.use(cors());
mongoose.connect(`${process.env.mongoDB_URL}`).then(() => {
  console.log("Connected Sucessfully");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Okay!");
});

app.get("/addHoldings", async (req, resp) => {
  await holding.insertMany(holdings);
  console.log("Okay Inserted!");
  resp.send("Okay Inserted!");
});

app.post("/addPositions", async (req, resp) => {
  let p1 = new orderModel(req.body);
  console.log("Called!");
  console.log(req.body);
  await p1.save();
  console.log("Saved!");
  resp.send("Okay Inserted!");
});

app.get("/getPositions", async (req, resp) => {
  let data = await positionsModel.find({});
  resp.json(data);
});

app.get("/getHoldings", async (req, resp) => {
  let data = await holding.find({});
  resp.json(data);
});
