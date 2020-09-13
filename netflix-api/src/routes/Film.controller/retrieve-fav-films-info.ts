import { Request, Response } from "express";
import { FilmDocument } from "../../schemas/film";
const handleError = require("../../essentials/errors/handle-error");
const { retrieveFavFilmsInfo } = require("../../server-logics");

/** 
Recieves the id of a film and returns the whole information of that film.

@param {Array<string>} favIdList The list of ids (favourite user films).

@throws {UnexistenceError} If the id is incorrect.
*/

module.exports = (req: Request, res: Response) => {
  try {
    const favIdList: Array<string> = req.body.favList;
    retrieveFavFilmsInfo(favIdList)
      .then((filmsInfoRetrieved: Array<FilmDocument>) => {
        res.send(filmsInfoRetrieved);
      })
      .catch((error: Error) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
