import mongoose = require("mongoose");
import { Document, model } from "mongoose";

export class User {
  nick: string;
  email: string;
  password: string;
  members: [
    {
      nick: { type: String };
      character: { type: String };
    }
  ];
  films: Array<string>;
  character: string;

  constructor(data: {
    nick: string;
    email: string;
    password: string;
    members: [
      {
        nick: { type: String };
        character: { type: String };
      }
    ];
    films: Array<string>;
    character: string;
  }) {
    this.nick = data.nick;
    this.email = data.email;
    this.password = data.password;
    this.members = data.members;
    this.films = data.films;
    this.character = data.character;
  }
}

var schema = new mongoose.Schema({
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

export interface UserDocument extends User, Document {}
const UserSchema = mongoose.model("User", schema);
export default UserSchema;
