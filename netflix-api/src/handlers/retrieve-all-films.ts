import { Request, Response } from "express";
import { FilmDocument } from "../schemas/film";
const handleError = require("../essentials/errors/handle-error");
const { retrieveAllFilms } = require("../server-logics");

/** 
Retrieves all the films from the database.
*/

module.exports = (req: Request, res: Response) => {
  try {
    retrieveAllFilms()
      .then((allFilms: Array<FilmDocument>) => {
        res.send(allFilms);
      })
      .catch((error: any) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
