import { Request, Response } from "express";
const handleError = require("../../essentials/errors/handle-error");
const { handleFavFilm } = require("../../server-logics");

/** 
Recieves the id of a film and a nick name. If the user with this nick already has this id in his favourite films array, it deletes it. Otherwise adds it. This is achieved due to the server logic we call from here.
*/

module.exports = (req: Request, res: Response) => {
  try {
    const {
      body: { ytId, nick },
    } = req;
    handleFavFilm(ytId, nick)
      .then((updatedFilms: Array<string>) => {
        res.send(updatedFilms);
      })
      .catch((error: Error) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
