import mongoose = require("mongoose");

export const FilmSchema = new mongoose.Schema({
  ytId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  gender: { type: Array, required: true },
  time: { type: String, required: true },
});

const Film = mongoose.model("Film", FilmSchema);
export default Film;
