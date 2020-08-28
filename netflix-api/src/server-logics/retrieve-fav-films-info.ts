import { Request, Response } from "express";
import Film from "../schemas/film";

module.exports = (req: Request, res: Response) => {
  type expectedBody = {
    ytId: string;
    gender: Array<string>;
    name: string;
    description: string;
    time: string;
    cover: string;
    __v: number;
    _id: string;
  };

  const favIdList: Array<string> = req.body.favList;
  let calla: number = 0;
  let filmsInfoRetrieved: Array<expectedBody> = [];
  favIdList.map((filmId) => {
    Film.findOne({ ytId: filmId }).then((filmFound: any) => {
      filmsInfoRetrieved.push(filmFound);
      calla++;
    });
  });
  console.log(calla);
  console.log(filmsInfoRetrieved);
  if (calla === favIdList.length) res.send(filmsInfoRetrieved);
};
