"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose = require("mongoose");
var User = /** @class */ (function () {
    function User(data) {
        this.nick = data.nick;
        this.email = data.email;
        this.password = data.password;
        this.members = data.members;
        this.films = data.films;
        this.character = data.character;
    }
    return User;
}());
exports.User = User;
var schema = new mongoose.Schema({
    nick: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    members: [
        {
            nick: { type: String },
            character: { type: String },
        },
    ],
    films: { type: Array, required: false },
    character: { type: String, required: true },
});
var UserSchema = mongoose.model("User", schema);
exports.default = UserSchema;
// export const UserSchema = new mongoose.Schema({
//   nick: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   members: [
//     {
//       nick: { type: String },
//       character: { type: String },
//     },
//   ],
//   films: { type: Array, required: false },
//   character: { type: String, required: true },
// });
// const User = mongoose.model("User", UserSchema);
// export default User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNjaGVtYXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFHdEM7SUFhRSxjQUFZLElBWVg7UUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0JBQUk7QUFtQ2pCLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxQyxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDdEIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtTQUM1QjtLQUNGO0lBQ0QsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3ZDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUM1QyxDQUFDLENBQUM7QUFHSCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsRCxrQkFBZSxVQUFVLENBQUM7QUFFMUIsa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0MsZ0RBQWdEO0FBQ2hELGVBQWU7QUFDZixRQUFRO0FBQ1IsZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1QsT0FBTztBQUNQLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQsTUFBTTtBQUVOLG1EQUFtRDtBQUNuRCx1QkFBdUIifQ==