import { Request, Response } from "express";
import Film from "../schemas/film";

const { DuplicityError } = require("../essentials/errors/error-builder");
const handleError = require("../essentials/errors/handle-error");

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
