import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
import Member, { MemberDocument } from "../schemas/member";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;
const { UnexistenceError } = require("../essentials/errors/error-builder");
const handleError = require("../essentials/errors/handle-error");

module.exports = async (req: Request, res: Response) => {
  try {
    const {
      body: { nick },
    } = req;
    let token;
    let userId: any;
    if (req.headers.authorization)
      [, token] = req.headers.authorization.split(" ");
    userId = jwt.verify(token, SECRET).sub;

    const userFound: any = await UserSchema.findById(userId);
    const filteredMemberList = userFound.members.filter(
      (member: any) => member.nick !== nick
    );
    userFound.members = filteredMemberList;
    userFound.save();
    if (nick) {
      await Member.remove({ nick });
      res.status(204).send();
    } else
      throw new UnexistenceError(
        "The nick of the user you want to delete doesn't exist"
      );
  } catch (error) {
    handleError(error, res);
  }
};
