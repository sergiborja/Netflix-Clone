import * as dotenv from "dotenv";
dotenv.config();
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

/** 
Recieves an email and a password, it the creadentials are correct, a new jwt token will be sent.

@param {string} email The email (already registered).
@param {string} password The password (already registered).

@throws {UnexistenceError} If the email doesn't exist.
@throws {CredentialsError} If the password is not correct.
*/

module.exports = async (email: string, password: string) => {
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
    return token;
  }
};
