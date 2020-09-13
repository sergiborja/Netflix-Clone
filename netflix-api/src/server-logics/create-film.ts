import Film, { FilmDocument } from "../schemas/film";

const { DuplicityError } = require("../essentials/errors/error-builder");

/** 
Recieves all the info of the film that wants to be added and creates the new film.

@param {string} req.body All the new film information.
@param {string} name The name of the new film to check if it already exist.

@throws {DuplicityError} If the name of the film already exist.
*/

module.exports = async (body: FilmDocument) => {
  const { name } = body;
  const filmFound = await Film.findOne({ name });
  if (filmFound) throw new DuplicityError("This film already exists");
  await Film.create(body);
};
