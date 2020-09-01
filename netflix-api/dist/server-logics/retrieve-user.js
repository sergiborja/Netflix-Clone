"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../schemas/user"));
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
module.exports = function (req, res) {
    if (!req.headers.authorization) {
        user_1.default.findOne(req.body).then(function (user) {
            if (!user)
                res.status(404).send();
            var nick = user.nick, films = user.films, email = user.email, members = user.members, character = user.character;
            res.send({ nick: nick, films: films, email: email, members: members, character: character });
        });
    }
    else if (req.headers.authorization) {
        var _a = req.headers.authorization.split(" "), token = _a[1];
        var userId = jwt.verify(token, SECRET).sub;
        user_1.default.findById(userId).then(function (userFound) {
            res.send(userFound);
        });
    }
    else {
        res.status(404).send();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvcmV0cmlldmUtdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUEyQztBQUMzQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFM0IsSUFBQSxNQUFNLEdBQ1gsT0FBTyxXQURJLENBQ0g7QUFFWixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBQzlCLGNBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7WUFDMUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFBLElBQUksR0FBdUMsSUFBSSxLQUEzQyxFQUFFLEtBQUssR0FBZ0MsSUFBSSxNQUFwQyxFQUFFLEtBQUssR0FBeUIsSUFBSSxNQUE3QixFQUFFLE9BQU8sR0FBZ0IsSUFBSSxRQUFwQixFQUFFLFNBQVMsR0FBSyxJQUFJLFVBQVQsQ0FBVTtZQUN4RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBQ2hDLElBQUEsS0FBWSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTdDLEtBQUssUUFBd0MsQ0FBQztRQUNyRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0MsY0FBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFTO1lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN4QjtBQUNILENBQUMsQ0FBQyJ9