import { Request, Response } from "express";
import UserSchema, { UserDocument } from "../schemas/user";
import { DuplicityError } from "../essentials/errors/error-builder";
const handleError = require("../essentials/errors/handle-error");

/** 
Recieves the data of the new user that wants to be created.

@param {string} name The name of the new user.
@param {string} surname The surname of the new user.
@param {string} password The password of the new user.
@param {string} character The character of the new user.

@throws {DuplicityError} If the email is already registered to our database.
@throws {DuplicityError} If the nick name is already registered to our database.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const { nick, email, password, character }: UserDocument = req.body;

    const nickFound = await UserSchema.findOne({ nick });
    if (nickFound) throw new DuplicityError("This nick name already exists");

    const emailFound = await UserSchema.findOne({ email });
    if (emailFound) throw new DuplicityError("This email already exists");

    const userCreated = await UserSchema.create({
      nick,
      email,
      password,
      character,
    });

    if (!userCreated)
      throw new Error(
        "There has been a problem with server, try it again later"
      );

    res.status(201).send();
  } catch (error) {
    handleError(error, res);
  }
};
