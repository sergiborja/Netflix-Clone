import mongoose = require("mongoose");

export const MemberSchema = new mongoose.Schema({
  nick: { type: String, required: true },
  films: { type: Array, required: false },
});

const Member = mongoose.model("Member", MemberSchema);
export default Member;
