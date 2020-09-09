"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var _a = require("./handlers"), authenticateUser = _a.authenticateUser, registerUser = _a.registerUser, retrieveUser = _a.retrieveUser;
var api = express_1.default.Router();
//User (admin) model
api.post("/users", registerUser);
api.get("/users/single", retrieveUser);
api.post("/users/auth", authenticateUser);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvVXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQ3hCLElBQUEsS0FBbUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUF0RSxnQkFBZ0Isc0JBQUEsRUFBRSxZQUFZLGtCQUFBLEVBQUUsWUFBWSxrQkFBMEIsQ0FBQztBQUUvRSxJQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTdCLG9CQUFvQjtBQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDIn0=