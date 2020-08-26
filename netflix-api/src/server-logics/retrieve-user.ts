import { Request, Response } from "express";
import User from "./../schemas/user";
const jwt = require("jsonwebtoken");
const SECRET = "lescatiusquesdeligorsondemoscou";

module.exports = (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    User.find(req.body).then((user) => {
      if (!user) res.status(404).send();
      else res.send(user);
    });
  } else if (req.headers.authorization) {
    let [, token] = req.headers.authorization.split(" ");
    let userId = jwt.verify(token, SECRET).sub;
    User.findById(userId).then((userFound) => {
      res.send(userFound);
    });
  } else {
    res.status(404).send();
  }
};
