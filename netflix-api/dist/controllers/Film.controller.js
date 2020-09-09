"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var _a = require("./handlers"), createFilm = _a.createFilm, retrieveAllFilms = _a.retrieveAllFilms;
var retrieveFavFilmsInfo = require("../server-logics").retrieveFavFilmsInfo;
var api = express_1.default.Router();
//Film model
api.post("/films", createFilm);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvRmlsbS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQ3hCLElBQUEsS0FBbUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUF0RCxVQUFVLGdCQUFBLEVBQUUsZ0JBQWdCLHNCQUEwQixDQUFDO0FBQ3ZELElBQUEsb0JBQW9CLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLHFCQUFoQyxDQUFpQztBQUU3RCxJQUFNLEdBQUcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTdCLFlBQVk7QUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFcEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMifQ==