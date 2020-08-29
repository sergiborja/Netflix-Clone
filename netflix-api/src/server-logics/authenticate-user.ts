import { Request, Response } from "express";
import UserSchema from "./../schemas/user";
const jwtPromised = require("../essentials/jwt-promised");
const SECRET = "lescatiusquesdeligorsondemoscou";
const bcrypt = require("bcrypt");

module.exports = async (req: Request, res: Response) => {
  let {
    body: { email, password },
  } = req;
  const userFound: any = await UserSchema.findOne({ email });
  if (!userFound) res.status(401).json("Email not found");
  else {
    const match = await bcrypt.compare(password, userFound.password);
    if (!match) res.status(401).json("Incorrect Password");
    else {
      const token = await jwtPromised.sign({ sub: userFound.id }, SECRET, {
        expiresIn: "1d",
      });
      await res.send({ token });
    }
  }
};
