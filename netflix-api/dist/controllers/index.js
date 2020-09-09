"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var handleFavFilm = require("./handlers").handleFavFilm;
var _a = require("./handlers"), createFilm = _a.createFilm, retrieveAllFilms = _a.retrieveAllFilms;
var retrieveFavFilmsInfo = require("../server-logics").retrieveFavFilmsInfo;
var _b = require("./handlers"), addMember = _b.addMember, deleteMember = _b.deleteMember, retrieveMember = _b.retrieveMember;
var _c = require("./handlers"), authenticateUser = _c.authenticateUser, registerUser = _c.registerUser, retrieveUser = _c.retrieveUser;
var api = express_1.default.Router();
//Common (admin-members) model
api.patch("/users/fav-films", handleFavFilm);
//Film model
api.post("/films", createFilm);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);
//Member model
api.get("/members/:nick?", retrieveMember);
api.patch("/members", addMember);
api.patch("/members/delete-one", deleteMember);
//User (admin) model
api.post("/users", registerUser);
api.get("/users/single", retrieveUser);
api.post("/users/auth", authenticateUser);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUN0QixJQUFBLGFBQWEsR0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQTFCLENBQTJCO0FBQzFDLElBQUEsS0FBbUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUF0RCxVQUFVLGdCQUFBLEVBQUUsZ0JBQWdCLHNCQUEwQixDQUFDO0FBQ3ZELElBQUEsb0JBQW9CLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLHFCQUFoQyxDQUFpQztBQUN2RCxJQUFBLEtBQThDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBakUsU0FBUyxlQUFBLEVBQUUsWUFBWSxrQkFBQSxFQUFFLGNBQWMsb0JBQTBCLENBQUM7QUFDcEUsSUFBQSxLQUFtRCxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQXRFLGdCQUFnQixzQkFBQSxFQUFFLFlBQVksa0JBQUEsRUFBRSxZQUFZLGtCQUEwQixDQUFDO0FBRS9FLElBQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFN0IsOEJBQThCO0FBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDN0MsWUFBWTtBQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNwQyxjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQy9DLG9CQUFvQjtBQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDIn0=