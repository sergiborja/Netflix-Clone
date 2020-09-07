import { Request, Response } from "express";
const handleError = require("../essentials/errors/handle-error");
const { retrieveMember } = require("../server-logics");

/** 
Recieves the nick name of the member that wants to be retrieved, calls the server logic and if everything is correct, sends it as res.
*/

module.exports = async (req: Request, res: Response) => {
  try {
    const nick: string = req.params.nick;
    retrieveMember(nick)
      .then((memberFound: any) => {
        res.send(memberFound);
      })
      .catch((error: any) => {
        handleError(error, res);
      });
  } catch (error) {
    handleError(error, res);
  }
};
