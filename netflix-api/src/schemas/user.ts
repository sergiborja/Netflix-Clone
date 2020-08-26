import mongoose = require("mongoose");

export const UserSchema = new mongoose.Schema({
  nick: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  members: { type: Array, required: false },
  films: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
