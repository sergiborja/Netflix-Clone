"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SECRET = process.env.SECRET;
var express_1 = __importDefault(require("express"));
var _a = require("./handlers"), addMember = _a.addMember, authenticateUser = _a.authenticateUser, createFilm = _a.createFilm, deleteMember = _a.deleteMember, handleFavFilm = _a.handleFavFilm, registerUser = _a.registerUser, retrieveAllFilms = _a.retrieveAllFilms, retrieveMember = _a.retrieveMember, retrieveUser = _a.retrieveUser;
var retrieveFavFilmsInfo = require("../server-logics").retrieveFavFilmsInfo;
// const bodyParser = require("body-parser");
// const { jwtVerifierExtractor } = require("../middlewares");
// const { handleError } = require("../helpers");
// const parseBody = bodyParser.json();
// const verifyExtractJwt = jwtVerifierExtractor(SECRET, handleError);
var api = express_1.default.Router();
api.post("/users", registerUser);
api.post("/films", createFilm);
api.get("/users/single", retrieveUser);
api.get("/members/:nick?", retrieveMember);
api.post("/users/auth", authenticateUser);
api.patch("/members", addMember);
api.patch("/users/fav-films", handleFavFilm);
api.patch("/members/delete-one", deleteMember);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDUyxJQUFBLE1BQU0sR0FDWCxPQUFPLFdBREksQ0FDSDtBQUdaLG9EQUE4QjtBQUN4QixJQUFBLEtBVUYsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQVR2QixTQUFTLGVBQUEsRUFDVCxnQkFBZ0Isc0JBQUEsRUFDaEIsVUFBVSxnQkFBQSxFQUNWLFlBQVksa0JBQUEsRUFDWixhQUFhLG1CQUFBLEVBQ2IsWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixjQUFjLG9CQUFBLEVBQ2QsWUFBWSxrQkFDVyxDQUFDO0FBQ2xCLElBQUEsb0JBQW9CLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLHFCQUFoQyxDQUFpQztBQUU3RCw2Q0FBNkM7QUFDN0MsOERBQThEO0FBQzlELGlEQUFpRDtBQUVqRCx1Q0FBdUM7QUFDdkMsc0VBQXNFO0FBRXRFLElBQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFcEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMifQ==