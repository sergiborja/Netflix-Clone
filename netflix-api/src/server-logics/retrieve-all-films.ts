import { Request, Response } from "express";
import Film from "../schemas/film";
import { UnexistenceError } from "../essentials/errors/error-builder";
const handleError = require("../essentials/errors/handle-error");

/** 
Retrieves all the films from the database.

@throws {UnexistenceError} If there's an error finding the films.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const allFilms = await Film.find();
    if (!allFilms) throw new UnexistenceError("We couldn't find any films");
    res.send(allFilms);
  } catch (error) {
    handleError(error, res);
  }
};
