import mongoose from "mongoose";
import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import holding from "./model/holding.js";
import positionsModel from "./model/positions.js";
import orderModel from "./model/order.js";
import { holdings } from "../dashboard/src/data/data.js";
import { positions } from "../dashboard/src/data/data.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
import userModel from "./model/user.js";
configDotenv();
app.use(extended.urlencoded());
const app = express();
app.use(cors());
app.use(cors());
const sessionOptions = {
  // store:store,
  secret: "MyFirstSceret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
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

app.post("/addOrders", async (req, resp) => {
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

// Sign-in Route
app.post("/signup", async (req, resp) => {
  let user1 = new userModel({
    username: req.body.username,
    email_id: req.body.email_id,
  });
  const res = await userModel.register(user1, req.body.password);
  resp.redirect("http://localhost:3001/");
});

app.get("/signin", (req, resp) => {
  resp.send("Sucessfully Failed!");
});

app.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
  }),
  (req, resp) => {
    resp.send("Sucessfully Loged-in!");
  },
);
app.get("/getOrders", async (req, resp) => {
  let data = await orderModel.find({});
  resp.send(data);
});
