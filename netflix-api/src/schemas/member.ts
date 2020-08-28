import mongoose = require("mongoose");
import Film from "./film";

export const MemberSchema = new mongoose.Schema({
  nick: { type: String, required: true },
  films: [{ type: String, required: false }],
  character: { type: String, required: true },
});

const Member = mongoose.model("Member", MemberSchema);
export default Member;
