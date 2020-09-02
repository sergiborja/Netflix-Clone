import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
import Member from "../schemas/member";
import { DuplicityError } from "../essentials/errors/error-builder";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const handleError = require("../essentials/errors/handle-error");

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
