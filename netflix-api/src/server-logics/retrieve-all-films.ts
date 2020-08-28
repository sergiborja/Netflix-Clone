import { Request, Response } from "express";
import Film from "../schemas/film";

module.exports = (req: Request, res: Response) => {
  Film.find().then((allFilms) => {
    res.send(allFilms);
  });
};
