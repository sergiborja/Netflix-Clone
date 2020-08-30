import mongoose = require("mongoose");
import { Document, model } from "mongoose";

export class Film {
  ytId: string;
  name: string;
  description: string;
  gender: Array<string>;
  time: string;
  cover: string;

  constructor(data: {
    ytId: string;
    name: string;
    description: string;
    gender: Array<string>;
    time: string;
    cover: string;
  }) {
    this.ytId = data.ytId;
    this.name = data.name;
    this.description = data.description;
    this.gender = data.gender;
    this.time = data.time;
    this.cover = data.cover;
  }
}

var schema = new mongoose.Schema({
  ytId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  gender: { type: Array, required: true },
  time: { type: String, required: true },
  cover: { type: String, required: true },
});

export interface FilmDocument extends Film, Document {}

export const FilmSchema = mongoose.model("Film", schema);

export default FilmSchema;

// export const FilmSchema = new mongoose.Schema({
//   ytId: { type: String, required: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   gender: { type: Array, required: true },
//   time: { type: String, required: true },
//   cover: { type: String, required: true },
// });

// const Film = mongoose.model("Film", FilmSchema);
// export default Film;
