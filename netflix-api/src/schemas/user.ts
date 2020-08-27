import mongoose = require("mongoose");

export const UserSchema = new mongoose.Schema({
  nick: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  members: [
    {
      nick: { type: String },
      character: { type: String },
    },
  ],
  films: { type: Array, required: false },
  character: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
export default User;
