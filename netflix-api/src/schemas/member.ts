import mongoose = require("mongoose");
import { Document, model } from "mongoose";

export class Member {
  nick: string;
  character: string;
  films: Array<string>;

  constructor(data: { nick: string; character: string; films: Array<string> }) {
    this.nick = data.nick;
    this.character = data.character;
    this.films = data.films;
  }
}

var schema = new mongoose.Schema({
  nick: { type: String, required: true },
  films: [{ type: String, required: false }],
  character: { type: String, required: true },
});

export interface MemberDocument extends Member, Document {}

export const MemberSchema = mongoose.model("Member", schema);

export default MemberSchema;

// export const MemberSchema = new mongoose.Schema({
//   nick: { type: String, required: true },
//   films: [{ type: String, required: false }],
//   character: { type: String, required: true },
// });

// const Member = mongoose.model("Member", MemberSchema);
// export default Member;
