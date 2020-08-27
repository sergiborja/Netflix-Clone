import mongoose = require("mongoose");

export const MemberSchema = new mongoose.Schema({
  nick: { type: String, required: true },
  films: { type: Array, required: false },
  character: { type: String, required: true },
});

const Member = mongoose.model("Member", MemberSchema);
export default Member;
