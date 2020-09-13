import { Request, Response } from "express";
import { MemberDocument } from "../../schemas/member";
const handleError = require("../../essentials/errors/handle-error");
const { retrieveMember } = require("../../server-logics");

/** 
Recieves the nick name of the member that wants to be retrieved, calls the server logic and if everything is correct, sends it as res.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const nick: string = req.params.nick;
    retrieveMember(nick)
      .then((memberFound: MemberDocument) => {
        res.send(memberFound);
      })
      .catch((error: Error) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
