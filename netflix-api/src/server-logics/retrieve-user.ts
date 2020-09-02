import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
import { UnexistenceError } from "../essentials/errors/error-builder";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const handleError = require("../essentials/errors/handle-error");

/** 
If a token is recieved from req headers, retrieves the info of the userId from this token. Otherwise, listens to the body of the req and retrives the user according to that body.

@param {string} req.body The body.
or
@param {string} nick The nick name.

@throws {UnexistenceError} If the user cannot be found.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      const userFound: any = await UserSchema.findOne(req.body);
      if (!userFound) throw new UnexistenceError("This user doesn't exist");
      const { nick, films, email, members, character } = userFound;
      res.send({ nick, films, email, members, character });
    } else if (req.headers.authorization) {
      let [, token] = req.headers.authorization.split(" ");
      let userId = jwt.verify(token, SECRET).sub;
      const _userFound = await UserSchema.findById(userId);
      if (!_userFound) throw new UnexistenceError("This user doesn't exist");
      res.send(_userFound);
    }
  } catch (error) {
    handleError(error, res);
  }
};
