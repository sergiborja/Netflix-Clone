import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const handleError = require("../essentials/errors/handle-error");
const { deleteMember } = require("../server-logics");

/** 
Recieves the nick name of the member that wants to be deleted by Req and the token of the admin. We send the required info to the server logic and if everything is okay, we send status 204.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const {
      body: { nick },
    } = req;
    let token: string;
    let userId: string;
    if (req.headers.authorization)
      [, token] = req.headers.authorization.split(" ");
    userId = jwt.verify(token, SECRET).sub;

    deleteMember(userId, nick)
      .then(() => {
        res.status(204).send();
      })
      .catch((error: any) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
