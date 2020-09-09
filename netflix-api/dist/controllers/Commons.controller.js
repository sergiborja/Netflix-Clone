"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handleFavFilm = require("./handlers").handleFavFilm;
var api = express_1.default.Router();
//Common (admin-members) model
api.patch("/users/fav-films", handleFavFilm);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9ucy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvQ29tbW9ucy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQ3RCLElBQUEsYUFBYSxHQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBMUIsQ0FBMkI7QUFFaEQsSUFBTSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU3Qiw4QkFBOEI7QUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyJ9