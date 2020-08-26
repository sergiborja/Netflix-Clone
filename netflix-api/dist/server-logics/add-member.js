"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../schemas/user"));
var member_1 = __importDefault(require("../schemas/member"));
var jwt = require("jsonwebtoken");
var SECRET = "lescatiusquesdeligorsondemoscou";
module.exports = function (req, res) {
    var _a;
    var nick = req.body.nick;
    var token;
    var userId;
    if (req.headers.authorization)
        _a = req.headers.authorization.split(" "), token = _a[1];
    userId = jwt.verify(token, SECRET).sub;
    user_1.default.findById(userId).then(function (user) {
        if (user) {
            user.members.push(nick);
        }
        else
            throw new Error("Token has expired");
        user_1.default.findByIdAndUpdate(userId, user).then(function () {
            member_1.default.create(req.body)
                .then(function () { return res.status(204).send(); })
                .catch(function (error) { return res.send(error); });
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvYWRkLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUFxQztBQUNyQyw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTs7SUFFakMsSUFBQSxJQUFJLEdBQ1YsR0FBRyxVQURPLENBQ047SUFDUixJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksTUFBVyxDQUFDO0lBQ2hCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO1FBQzNCLEtBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUE3QyxLQUFLLFFBQUEsQ0FBeUM7SUFDbkQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUV2QyxjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7UUFDbkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6Qjs7WUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDNUMsY0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztpQkFDcEIsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDO2lCQUNsQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==