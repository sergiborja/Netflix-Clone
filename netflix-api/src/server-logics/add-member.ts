import UserSchema from "./../schemas/user";
import Member from "../schemas/member";
import {
  DuplicityError,
  UnexistenceError,
} from "../essentials/errors/error-builder";

module.exports = async (nick: string, character: string, userId: string) => {
  const nickFound = await Member.findOne({ nick });
  if (nickFound) throw new DuplicityError("This nick name already exists");
  const adminFound: any = await UserSchema.findById(userId);
  if (!adminFound)
    throw new UnexistenceError("There's no user with this UserId");
  adminFound.members.push({ nick, character });
  adminFound.save();
  await Member.create({ nick, character });
};
