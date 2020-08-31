import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
const jwtPromised = require("../essentials/jwt-promised");
const {
  env: { SECRET },
} = process;
const bcrypt = require("bcryptjs");

module.exports = async (req: Request, res: Response) => {
  let email: string = req.body.email;
  let password: string = req.body.password;
  const userFound: any = await UserSchema.findOne({ email });
  if (!userFound) res.status(401).json("Email not found");
  else {
    const match = await bcrypt.compare(password, userFound.password);
    if (!match) res.status(401).json("Incorrect Password");
    else {
      const token: string = await jwtPromised.sign(
        { sub: userFound.id },
        SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.send({ token });
    }
  }
};
