import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
import Member, { MemberDocument } from "../schemas/member";
import { SchemaType } from "mongoose";
const jwt = require("jsonwebtoken");
const SECRET: string = "lescatiusquesdeligorsondemoscou";

module.exports = (req: Request, res: Response) => {
  const {
    body: { nick, character },
  } = req;
  let token;
  let userId: string;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;
  Member.findOne({ nick }).then((nickFound) => {
    if (!nickFound) {
      UserSchema.findById(userId).then((user: any) => {
        user.members.push({ nick, character });
        user.save();
        Member.create(req.body)
          .then(() => res.status(204).send())
          .catch((error) => res.send(error));
      });
    } else {
      res.status(409).json("This nick name already exists");
    }
  });
};
