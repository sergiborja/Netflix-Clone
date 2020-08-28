import { Request, Response } from "express";
import Film from "../schemas/film";

module.exports = async (req: Request, res: Response) => {
  //   const { ytId, name, description, gender, time } = req.body;
  Film.create(req.body, (error: any, film: any) => {
    if (error) res.send(error);
    else res.status(201).send();
  });
};
