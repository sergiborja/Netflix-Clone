import { Request, Response } from "express";
import Member from "../schemas/member";
import { UnexistenceError } from "../essentials/errors/error-builder";
const handleError = require("../essentials/errors/handle-error");

/** 
Recieves the nick name of the member that wants to be retrieved.

@param {string} nick The nick name.

@throws {UnexistenceError} If member with this nick name couldn't be found.
*/

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
