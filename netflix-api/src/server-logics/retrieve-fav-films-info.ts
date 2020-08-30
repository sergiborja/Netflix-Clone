import { Request, Response } from "express";
import Film, { FilmDocument } from "../schemas/film";

module.exports = (req: Request, res: Response) => {
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
        res.status(404).send("There was a problem finding this Film Id");
      });
  });
};
