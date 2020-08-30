import { Request, Response } from "express";
import Member from "../schemas/member";

module.exports = (req: Request, res: Response) => {
  const nick = req.params.nick;
  Member.findOne({ nick })
    .then((memberFound) => {
      if (!memberFound) res.status(404).send();
      else res.send(memberFound);
    })
    .catch(() => {
      res.status(500).send("Server Error");
    });
};
