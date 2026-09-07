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

const app = express();
app.use(cors({
    origin: [
        "http://localhost:3001",
        "http://localhost:5173"
    ],
    credentials: true
}));
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

app.post("/addOrders", async (req, res) => {

    console.log("Add Order Called");
    console.log("User:", req.user);
    console.log("Body:", req.body);

    if (!req.isAuthenticated()) {
        return res.status(401).json({
            message: "User not authenticated"
        });
      }
    try {
        let p1 = new orderModel({
            ...req.body,
            userId: req.user._id
        });
        await p1.save();
        await userModel.findByIdAndUpdate(
            req.user._id,
            {
                $push: {
                    orders: p1._id
                }
            }
        );
        res.send("Okay Inserted!");
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error creating order"
        });
    }
});

app.get("/getPositions", async (req, resp) => {
  let data = await positionsModel.find({});
  resp.json(data);
});

app.get("/getHoldings", async (req, resp) => {
  let data = await holding.find({});
  resp.json(data);
});

// Signup Route
app.post("/signup", async (req, resp) => {
  let user1 = new userModel({
    username: req.body.username,
    email_id: req.body.email_id,
  });
  const res = await userModel.register(user1, req.body.password);
  resp.redirect("http://localhost:3001/");
});

app.get("/Failure",(req,resp)=>{
  resp.send("Login Failed!");
})

app.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/Failure",
  }),
  (req, resp) => {
  resp.redirect("http://localhost:3001/")
  },
);
app.get("/getOrders", async (req, resp) => {
  let data = await orderModel.find({});
  resp.send(data);
});
app.get("/getuserName",(req,resp)=>{
  if(req.isAuthenticated()){
   resp.send(req.user.username);
  }
  else{
     return res.status(401).json({
            message: "Not authenticated"
        });
  }
})