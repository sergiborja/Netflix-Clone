import UserSchema, { UserDocument } from "../schemas/user";
import Member, { MemberDocument } from "../schemas/member";

/** 
Recieves the id of a film and a nick name. If the user with this nick already has this id in his favourite films array, it deletes it. Otherwise adds it.

@param {string} ytId The id of the film that wants to be added or deleted.

@throws {UnexistenceError} If there's a fail obtaining the user id of the token.
*/

module.exports = async (ytId: string, nick: string) => {
  let userFound: any;

  userFound = await Member.findOne({ nick });
  if (!userFound) userFound = await UserSchema.findOne({ nick });

  const indexOfFilm: number = userFound.films.indexOf(ytId);
  if (indexOfFilm !== -1) {
    userFound.films.splice(indexOfFilm, 1);
  } else {
    userFound.films.push(ytId);
  }

  await userFound.save();

  return userFound.films;
};
