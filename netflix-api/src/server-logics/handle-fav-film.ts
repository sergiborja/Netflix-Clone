import { Request, Response } from "express";
import User from "../schemas/user";
import Member from "../schemas/member";

module.exports = async (req: Request, res: Response) => {
  const {
    body: { nick, ytId },
  } = req;

  let userFound: any = await Member.findOne({ nick });
  if (!userFound) userFound = await User.findOne({ nick });

  if (!userFound) {
    res.status(404).send();
    res.send("ESTE NICK NAME NO EXISTE");
  } else {
    const filteredFilmsArray = userFound.films.filter(
      (film: any) => film !== ytId
    );
    if (
      JSON.stringify(filteredFilmsArray) === JSON.stringify(userFound.films)
    ) {
      filteredFilmsArray.push(ytId);
    }
    userFound.films = filteredFilmsArray;
    await userFound.save();
    res.send(userFound.films);
  }
};
