import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;

module.exports = (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    UserSchema.findOne(req.body).then((user: any) => {
      if (!user) res.status(404).send();
      const { nick, films, email, members, character } = user;
      res.send({ nick, films, email, members, character });
    });
  } else if (req.headers.authorization) {
    let [, token] = req.headers.authorization.split(" ");
    let userId = jwt.verify(token, SECRET).sub;
    UserSchema.findById(userId).then((userFound) => {
      res.send(userFound);
    });
  } else {
    res.status(404).send();
  }
};
