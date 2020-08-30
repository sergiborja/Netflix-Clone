"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../schemas/user"));
var member_1 = __importDefault(require("../schemas/member"));
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvYWRkLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUEyQztBQUMzQyw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTNCLElBQUEsTUFBTSxHQUNYLE9BQU8sV0FESSxDQUNIO0FBRVosTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhOztJQUV6QyxJQUFBLEtBQ0UsR0FBRyxLQURvQixFQUFqQixJQUFJLFVBQUEsRUFBRSxTQUFTLGVBQUUsQ0FDbkI7SUFDUixJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO1FBQzNCLEtBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUE3QyxLQUFLLFFBQUEsQ0FBeUM7SUFDbkQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFTO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxjQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osZ0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDcEIsSUFBSSxDQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDO3FCQUNsQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9