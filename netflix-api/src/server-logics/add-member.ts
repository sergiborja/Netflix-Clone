import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
import Member from "../schemas/member";
const jwt = require("jsonwebtoken");
const SECRET = "lescatiusquesdeligorsondemoscou";

module.exports = (req: Request, res: Response) => {
  const {
    body: { nick, character },
  } = req;
  let token;
  let userId: string;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;

  UserSchema.findById(userId).then((user: any) => {
    if (user) {
      user.members.push({ nick, character });
    } else throw new Error("Token has expired");
    UserSchema.findByIdAndUpdate(userId, user).then(() => {
      Member.create(req.body)
        .then(() => res.status(204).send())
        .catch((error) => res.send(error));
    });
  });
};
