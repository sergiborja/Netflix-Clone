import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
const jwt = require("jsonwebtoken");
const {
  env: { SECRET },
} = process;

module.exports = (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    UserSchema.find(req.body).then((user) => {
      if (!user) res.status(404).send();
      else res.send(user);
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
