import { Request, Response } from "express";
import User from "./../schemas/user";
import Member from "../schemas/member";
const jwt = require("jsonwebtoken");
const SECRET = "lescatiusquesdeligorsondemoscou";

module.exports = (req: Request, res: Response) => {
  const nick = req.params.nick;
  Member.findOne({ nick }).then((memberFound) => {
    if (!memberFound) res.status(404).send();
    else res.send(memberFound);
  });
};
