import mongoose from "mongoose";
import passportlocalmongoose from "passport-local-mongoose";

let userSchema = mongoose.Schema({
  email_id: {
    type: String,
  },
  positions: {},
  orders: {},
  holdings: {},
});
userSchema.plugin(passportlocalmongoose.default);
let userModel = mongoose.model("user", userSchema);
export default userModel;
