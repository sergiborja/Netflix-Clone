import { Request, Response } from "express";
import User from "./../schemas/user";
const jwtPromised = require("../essentials/jwt-promised");
const SECRET = "lescatiusquesdeligorsondemoscou";
const bcrypt = require("bcrypt");

module.exports = async (req: Request, res: Response) => {
  let {
    body: { email, password },
  } = req;
  const userFound: any = await User.findOne({ email });
  if (!userFound) throw new Error("Este email no existe");
  else {
    const match = await bcrypt.compare(password, userFound.password);
    if (!match) throw new Error("Contraseña incorrecta");
    else {
      const token = await jwtPromised.sign({ sub: userFound.id }, SECRET, {
        expiresIn: "1d",
      });
      await res.send(token);
    }
  }
};
