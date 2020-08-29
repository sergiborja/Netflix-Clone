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
    var _b = req.body, nick = _b.nick, character = _b.character;
    var token;
    var userId;
    if (req.headers.authorization)
        _a = req.headers.authorization.split(" "), token = _a[1];
    userId = jwt.verify(token, SECRET).sub;
    user_1.default.findById(userId).then(function (user) {
        if (user) {
            user.members.push({ nick: nick, character: character });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvYWRkLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUEyQztBQUMzQyw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTs7SUFFekMsSUFBQSxLQUNFLEdBQUcsS0FEb0IsRUFBakIsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFFLENBQ25CO0lBQ1IsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYTtRQUMzQixLQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBN0MsS0FBSyxRQUFBLENBQXlDO0lBQ25ELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFdkMsY0FBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7U0FDeEM7O1lBQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVDLGNBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxjQUFNLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQztpQkFDbEMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=