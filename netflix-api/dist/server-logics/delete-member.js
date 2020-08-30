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
    var nick = req.body.nick;
    var token;
    var userId;
    if (req.headers.authorization)
        _a = req.headers.authorization.split(" "), token = _a[1];
    userId = jwt.verify(token, SECRET).sub;
    user_1.default.findById(userId).then(function (userFound) {
        var filteredMemberList = userFound.members.filter(function (member) { return member.nick !== nick; });
        userFound.members = filteredMemberList;
        userFound.save();
        member_1.default.remove({ nick: nick }).then(function () {
            res.status(204).send();
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvZGVsZXRlLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUE2RDtBQUM3RCw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTNCLElBQUEsTUFBTSxHQUNYLE9BQU8sV0FESSxDQUNIO0FBRVosTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhOztJQUVqQyxJQUFBLElBQUksR0FDVixHQUFHLFVBRE8sQ0FDTjtJQUNSLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxNQUFXLENBQUM7SUFDaEIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7UUFDM0IsS0FBWSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTdDLEtBQUssUUFBQSxDQUF5QztJQUNuRCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRXZDLGNBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBYztRQUM5QyxJQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNqRCxVQUFDLE1BQVcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFwQixDQUFvQixDQUN0QyxDQUFDO1FBQ0YsU0FBUyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9