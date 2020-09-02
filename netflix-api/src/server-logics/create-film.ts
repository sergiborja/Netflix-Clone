import { Request, Response } from "express";
import Film from "../schemas/film";

const { DuplicityError } = require("../essentials/errors/error-builder");
const handleError = require("../essentials/errors/handle-error");

/** 
Recieves all the info of the film that wants to be added.

@param {string} req.body All the new film information.
@param {string} name The name of the new film to check if it already exist.

@throws {DuplicityError} If the name of the film already exist.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const filmFound = await Film.findOne({ name });
    if (filmFound) throw new DuplicityError("This film already exists");
    await Film.create(req.body);
    res.status(201).send();
  } catch (error) {
    handleError(error, res);
  }
};
