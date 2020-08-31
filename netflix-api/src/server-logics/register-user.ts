import { Request, Response } from "express";
import UserSchema from "../schemas/user";

module.exports = async (req: Request, res: Response) => {
  const nick: string = req.body.nick;
  const email: string = req.body.email;
  const password: string = req.body.password;
  const character: string = req.body.character;
  // const hash = await bcrypt.hash(password, 10);
  const nickFound = await UserSchema.findOne({ nick });
  if (!nickFound) {
    UserSchema.create(
      { nick, email, password, character },
      (error: any, user: any) => {
        if (error) res.status(409).json("This email already exists");
        else res.status(201).send();
      }
    );
  } else {
    res.status(409).json("This nick name already exists");
  }
};
