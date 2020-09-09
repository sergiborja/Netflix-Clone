import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const handleError = require("../../essentials/errors/handle-error");
const { addMember } = require("../../server-logics");

/** 
Recieves a nick name from Req, we send it to the server logic and if everything goes great, status 201 will be sent as Res.
*/

module.exports = async (req: Request, res: Response) => {
  const {
    body: { nick, character },
  } = req;
  let token;
  let userId: string;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;
  try {
    addMember(nick, character, userId)
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
