import { Request, Response, response } from "express";
import User from "./../user";
const jwt = require("jsonwebtoken");
const jwtPromised = require("../essentials/jwt-promised");
const SECRET = "lescatiusquesdeligorsondemoscou";

export let newUser = (req: Request, res: Response) => {
  User.create(req.body, (error: any, user: any) => {
    if (error) res.send(error);
    else res.status(201).send();
  });
};

export let getUser = (req: Request, res: Response) => {
  User.find(req.body).then((user) => {
    if (!user) res.status(404).send();
    else res.send(user);
  });
};

export let authUser = async (req: Request, res: Response) => {
  const {
    body: { email, password },
  } = req;
  const userFound: any = await User.findOne({ email });
  if (!userFound) throw new Error("Este email no existe");
  else {
    if (userFound.password !== password)
      throw new Error("Contraseña incorrecta");
    else {
      const token = await jwtPromised.sign({ sub: userFound.id }, SECRET, {
        expiresIn: "1d",
      });
      await res.send(token);
    }
  }
};

export let addMember = (req: Request, res: Response) => {
  const {
    body: { name },
  } = req;
  let token;
  let userId: any;
  if (req.headers.authorization)
    [, token] = req.headers.authorization.split(" ");
  userId = jwt.verify(token, SECRET).sub;

  User.findById(userId).then((user: any) => {
    if (user) {
      user.members.push(name);
    } else throw new Error("Token has expired");
    User.findByIdAndUpdate(userId, user).then(() => res.status(204).send());
  });
};
