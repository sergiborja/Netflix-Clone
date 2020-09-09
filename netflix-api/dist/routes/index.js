"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var _a = require("./Film.controller"), createFilm = _a.createFilm, retrieveAllFilms = _a.retrieveAllFilms;
var retrieveFavFilmsInfo = require("../server-logics").retrieveFavFilmsInfo;
var _b = require("./Member.controller"), addMember = _b.addMember, deleteMember = _b.deleteMember, retrieveMember = _b.retrieveMember;
var _c = require("./User.controller"), authenticateUser = _c.authenticateUser, registerUser = _c.registerUser, retrieveUser = _c.retrieveUser, handleFavFilm = _c.handleFavFilm;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBOEI7QUFDeEIsSUFBQSxLQUFtQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBN0QsVUFBVSxnQkFBQSxFQUFFLGdCQUFnQixzQkFBaUMsQ0FBQztBQUM5RCxJQUFBLG9CQUFvQixHQUFLLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBaEMsQ0FBaUM7QUFDdkQsSUFBQSxLQUlGLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUhoQyxTQUFTLGVBQUEsRUFDVCxZQUFZLGtCQUFBLEVBQ1osY0FBYyxvQkFDa0IsQ0FBQztBQUM3QixJQUFBLEtBS0YsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBSjlCLGdCQUFnQixzQkFBQSxFQUNoQixZQUFZLGtCQUFBLEVBQ1osWUFBWSxrQkFBQSxFQUNaLGFBQWEsbUJBQ2lCLENBQUM7QUFFakMsSUFBTSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU3Qiw4QkFBOEI7QUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUU3QyxZQUFZO0FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXBDLGNBQWM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFL0Msb0JBQW9CO0FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMifQ==