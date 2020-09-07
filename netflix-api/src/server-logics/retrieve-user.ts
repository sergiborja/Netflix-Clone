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

module.exports = async (userInfo: any) => {
  let userFound: any = await UserSchema.findOne({ nick: userInfo });
  if (!userFound) userFound = await UserSchema.findById(userInfo);
  if (!userFound) throw new UnexistenceError("This user doesn't exist");
  return userFound;
};
