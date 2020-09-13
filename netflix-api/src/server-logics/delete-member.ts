import UserSchema, { User, UserDocument } from "./../schemas/user";
import Member, { MemberDocument } from "../schemas/member";
const { UnexistenceError } = require("../essentials/errors/error-builder");

/** 
Recieves the nick name of the member that wants to be deleted, and deletes it.

@param {string} nick The nick name.

@throws {UnexistenceError} If the nick name doesn't exist.
*/

module.exports = async (userId: string, nick: string) => {
  const userFound: any = await UserSchema.findById(userId);
  const filteredMemberList = userFound.members.filter(
    (member: any) => member.nick !== nick
  );
  userFound.members = filteredMemberList;
  userFound.save();
  if (nick) {
    await Member.remove({ nick });
  } else
    throw new UnexistenceError(
      "The nick of the user you want to delete doesn't exist"
    );
};
