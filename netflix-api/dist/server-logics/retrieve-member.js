"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var member_1 = __importDefault(require("../schemas/member"));
var jwt = require("jsonwebtoken");
var SECRET = "lescatiusquesdeligorsondemoscou";
module.exports = function (req, res) {
    var nick = req.params.nick;
    member_1.default.findOne({ nick: nick })
        .then(function (memberFound) {
        if (!memberFound)
            res.status(404).send();
        else
            res.send(memberFound);
    })
        .catch(function () {
        res.status(500).send("Server Error");
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtbWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2VydmVyLWxvZ2ljcy9yZXRyaWV2ZS1tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM3QixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7U0FDckIsSUFBSSxDQUFDLFVBQUMsV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVztZQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDO1FBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==