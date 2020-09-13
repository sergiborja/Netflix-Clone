import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
const handleError = require("../../essentials/errors/handle-error");
const { authenticateUser } = require("../../server-logics");

/** 
Recieves an email and a password from the Req, sends it to the server logic and if everything is okay, a new jwt token will be sent as Res.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    let email: string = req.body.email;
    let password: string = req.body.password;
    authenticateUser(email, password)
      .then((token: string) => {
        res.send({ token });
      })
      .catch((error: Error) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
