import { Request, Response } from "express";
import UserSchema, { UserDocument } from "../schemas/user";
import Member, { MemberDocument } from "../schemas/member";
const { UnexistenceError } = require("../essentials/errors/error-builder");
const handleError = require("../essentials/errors/handle-error");
const {
  env: { SECRET },
} = process;
const jwt = require("jsonwebtoken");

/** 
Recieves the id of a film. If the user asking for this already has this id in his favourite films array, it deletes it. Otherwise adds it.

@param {string} ytId The id of the film that wants to be added or deleted.

@throws {UnexistenceError} If there's a fail obtaining the user id of the token.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const {
      body: { ytId, nick },
    } = req;

    let token;
    let userId;
    let userFound: any;

    if (nick) {
      userFound = await Member.findOne({ nick });
    } else {
      [, token] = req.headers.authorization.split(" ");
      userId = jwt.verify(token, SECRET).sub;
      userFound = await UserSchema.findById(userId);
    }

    const indexOfFilm: number = userFound.films.indexOf(ytId);
    if (indexOfFilm !== -1) {
      userFound.films.splice(indexOfFilm, 1);
    } else {
      userFound.films.push(ytId);
    }

    await userFound.save();
    res.send(userFound.films);
  } catch (error) {
    handleError(error, res);
  }
};
