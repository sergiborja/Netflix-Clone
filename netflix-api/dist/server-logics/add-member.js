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
    member_1.default.findOne({ nick: nick }).then(function (nickFound) {
        if (!nickFound) {
            user_1.default.findById(userId).then(function (user) {
                user.members.push({ nick: nick, character: character });
                user.save();
                member_1.default.create(req.body)
                    .then(function () { return res.status(204).send(); })
                    .catch(function (error) { return res.send(error); });
            });
        }
        else {
            res.status(409).json("This nick name already exists");
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvYWRkLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUEyQztBQUMzQyw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTs7SUFFekMsSUFBQSxLQUNFLEdBQUcsS0FEb0IsRUFBakIsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFFLENBQ25CO0lBQ1IsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYTtRQUMzQixLQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBN0MsS0FBSyxRQUFBLENBQXlDO0lBQ25ELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdkMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBYztRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsY0FBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxjQUFNLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQztxQkFDbEMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==