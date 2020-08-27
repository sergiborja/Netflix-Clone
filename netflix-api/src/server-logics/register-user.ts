import { Request, Response } from "express";
import User from "./../schemas/user";
const bcrypt = require("bcrypt");

module.exports = async (req: Request, res: Response) => {
  const { nick, email, password, character } = req.body;
  const hash = await bcrypt.hash(password, 10);
  User.create(
    { nick, email, password: hash, character },
    (error: any, user: any) => {
      if (error) res.send(error);
      else res.status(201).send();
    }
  );
};
