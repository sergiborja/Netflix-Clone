import { Request, Response } from "express";
import User from "./../schemas/user";
import Member from "../schemas/member";
const jwt = require("jsonwebtoken");
const SECRET = "lescatiusquesdeligorsondemoscou";

module.exports = (req: Request, res: Response) => {
  const {
    body: { nick },
  } = req;
  let token;
  let userId: any;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;

  User.findById(userId).then((user: any) => {
    if (user) {
      user.members.push(nick);
    } else throw new Error("Token has expired");
    User.findByIdAndUpdate(userId, user).then(() => {
      Member.create(req.body)
        .then(() => res.status(204).send())
        .catch((error) => res.send(error));
    });
  });
};
