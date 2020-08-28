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
    member_1.default.findOne({ nick: nick }).then(function (memberFound) {
        if (!memberFound)
            res.status(404).send();
        else
            res.send(memberFound);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtbWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2VydmVyLWxvZ2ljcy9yZXRyaWV2ZS1tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSw2REFBdUM7QUFDdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM3QixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxXQUFXO1FBQ3hDLElBQUksQ0FBQyxXQUFXO1lBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9