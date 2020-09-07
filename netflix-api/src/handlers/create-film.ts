import { Request, Response } from "express";

const handleError = require("../essentials/errors/handle-error");
const { createFilm } = require("../server-logics");

/** 
Recieves all the info of the film that wants to be added in the Req and sends it to the server logic, if everything is correct, success status is gonna be sent as Res.
*/

module.exports = (req: Request, res: Response) => {
  try {
    createFilm(req.body)
      .then(() => {
        res.status(201).send();
      })
      .catch((error: any) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
