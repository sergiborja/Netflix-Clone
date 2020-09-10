import * as dotenv from "dotenv";
dotenv.config();
import UserSchema from "./../schemas/user";
const jwtPromised = require("../essentials/jwt-promised");
const {
  env: { SECRET },
} = process;
const bcrypt = require("bcrypt");

const {
  UnexistenceError,
  CredentialsError,
} = require("../essentials/errors/error-builder");

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
    console.log(password);
    console.log(userFound.password);
    const match = await bcrypt.compare(password, userFound.password);
    console.log(match);
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
