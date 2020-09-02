import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
import Member from "../schemas/member";
import { DuplicityError } from "../essentials/errors/error-builder";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const handleError = require("../essentials/errors/handle-error");

/** 
Recieves a nick name and the src of the character user chose for this new member. If the params pass the error tests, status 201 will be sent.
@param {string} token The req headers authorization, will be used to find and handle the User collection.
@param {string} nick The nick name of the new member.
@param {string} character The src of the character for this new member.

@throws {DuplicityError} If the nick name of the new member already exist.
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
    const nickFound = await Member.findOne({ nick });
    if (nickFound) {
      throw new DuplicityError("This nick name already exists");
    } else {
      UserSchema.findById(userId)
        .then((user: any) => {
          user.members.push({ nick, character });
          user.save();
          Member.create(req.body)
            .then(() => res.status(204).send())
            .catch((error) => handleError(error, res));
        })
        .catch((error) => handleError(error, res));
    }
  } catch (error) {
    handleError(error, res);
  }
};
