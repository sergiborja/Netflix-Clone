import { Request, Response } from "express";
const handleError = require("../../essentials/errors/handle-error");
const { registerUser } = require("../../server-logics");

/** 
Recieves the data of the new user that wants to be created as req, we send it to the server logic, if everything is correct, we will send an status 201.
*/

module.exports = (req: Request, res: Response) => {
  try {
    registerUser(req.body)
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
