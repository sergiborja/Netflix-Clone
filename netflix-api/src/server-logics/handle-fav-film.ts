import { Request, Response } from "express";
import UserSchema from "../schemas/user";
import Member from "../schemas/member";
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
      body: { ytId },
    } = req;

    let token;
    let userId;

    if (req.headers.authorization)
      [, token] = req.headers.authorization.split(" ");
    userId = jwt.verify(token, SECRET).sub;

    if (!userId)
      throw new UnexistenceError("There is no user asociated with this token");

    let userFound: any = await Member.findById(userId);
    if (!userFound) userFound = await UserSchema.findById(userId);

    const updatedFavFilmList = userFound.films.filter(
      (film: any) => film !== ytId
    );
    if (
      JSON.stringify(updatedFavFilmList) === JSON.stringify(userFound.films)
    ) {
      updatedFavFilmList.push(ytId);
    }
    userFound.films = updatedFavFilmList;
    await userFound.save();
    res.send(userFound.films);
  } catch (error) {
    handleError(error, res);
  }
};
