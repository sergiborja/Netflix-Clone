import { Request, Response } from "express";
import Film, { FilmDocument } from "../schemas/film";
import { UnexistenceError } from "../essentials/errors/error-builder";
const handleError = require("../essentials/errors/handle-error");

/** 
Recieves the id of a film and returns the whole information of that film.

@param {Array<string>} favIdList The list of ids (favourite user films).

@throws {UnexistenceError} If the id is incorrect.
*/

module.exports = (req: Request, res: Response) => {
  try {
    const favIdList: Array<string> = req.body.favList;
    let filmsInfoRetrieved: Array<FilmDocument> = [];
    favIdList.map((filmId) => {
      Film.findOne({ ytId: filmId })
        .then((filmFound: any) => {
          filmsInfoRetrieved.push(filmFound);
          if (filmsInfoRetrieved.length === favIdList.length) {
            res.send(filmsInfoRetrieved);
          }
        })
        .catch((error) => {
          throw new UnexistenceError(
            "There was a problem finding this Film Id"
          );
        });
    });
  } catch (error) {
    handleError(error, res);
  }
};
