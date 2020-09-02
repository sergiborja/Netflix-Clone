import { Request, Response } from "express";
import Member from "../schemas/member";
import { UnexistenceError } from "../essentials/errors/error-builder";
const handleError = require("../essentials/errors/handle-error");

module.exports = async (req: Request, res: Response) => {
  try {
    const nick: string = req.params.nick;
    const memberFound = await Member.findOne({ nick });
    if (!memberFound) throw new UnexistenceError("This member doesn't exist");
    else res.send(memberFound);
  } catch (error) {
    handleError(error, res);
  }
};
