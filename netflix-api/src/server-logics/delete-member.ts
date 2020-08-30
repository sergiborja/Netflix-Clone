import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
import Member from "../schemas/member";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;

module.exports = (req: Request, res: Response) => {
  const {
    body: { nick },
  } = req;
  let token;
  let userId: any;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;

  UserSchema.findById(userId).then((userFound: any) => {
    const filteredMemberList = userFound.members.filter(
      (member: any) => member.nick !== nick
    );
    userFound.members = filteredMemberList;
    userFound.save();
    Member.remove({ nick }).then(() => {
      res.status(204).send();
    });
  });
};
