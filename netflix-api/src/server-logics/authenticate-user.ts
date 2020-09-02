import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import UserSchema, { UserDocument } from "./../schemas/user";
const jwtPromised = require("../essentials/jwt-promised");
const {
  env: { SECRET },
} = process;
const bcrypt = require("bcryptjs");

const {
  UnexistenceError,
  CredentialsError,
} = require("../essentials/errors/error-builder");
const handleError = require("../essentials/errors/handle-error");

module.exports = async (req: Request, res: Response) => {
  try {
    let email: string = req.body.email;
    let password: string = req.body.password;
    const userFound: any = await UserSchema.findOne({ email });
    if (!userFound) throw new UnexistenceError("Email not found");
    else {
      const match = await bcrypt.compare(password, userFound.password);
      if (!match) throw new CredentialsError("Incorrect Password");
      const token: string = await jwtPromised.sign(
        { sub: userFound.id },
        SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.send({ token });
    }
  } catch (error) {
    handleError(error, res);
  }
};
