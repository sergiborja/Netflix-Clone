"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var _a = require("process").env, uri = _a.MONGODB_URL, PORT = _a.PORT;
var cors = require("./essentials/cors");
var app = express();
var _b = require("./server-logics/index"), registerUser = _b.registerUser, retrieveUser = _b.retrieveUser, authenticateUser = _b.authenticateUser, addMember = _b.addMember, retrieveMember = _b.retrieveMember, createFilm = _b.createFilm, handleFavFilm = _b.handleFavFilm, retrieveFavFilmsInfo = _b.retrieveFavFilmsInfo, retrieveAllFilms = _b.retrieveAllFilms, deleteMember = _b.deleteMember;
app.set("port", PORT);
app.use(cors);
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("NOT FOUND :(");
});
app.post("/users", registerUser);
app.post("/films", createFilm);
app.get("/users/single", retrieveUser);
app.get("/members/:nick?", retrieveMember);
app.post("/users/auth", authenticateUser);
app.patch("/members", addMember);
app.patch("/users/fav-films", handleFavFilm);
app.patch("/members/delete-one", deleteMember);
app.post("/films/favs", retrieveFavFilmsInfo);
app.get("/films/all", retrieveAllFilms);
// app.post("/users", registerUser);
// app.post("/users/film", createFilm);
// app.get("/users", retrieveUser);
// app.get("/users/:nick?", retrieveMember);
// app.post("/users/auth", authenticateUser);
// app.patch("/users", addMember);
// app.patch("/users/handleFavs", handleFavFilm);
// app.patch("/users/delMember", deleteMember);
// app.post("/favFilms", retrieveFavFilmsInfo);
// app.get("/allFilms", retrieveAllFilms);
app.listen(app.get("port"), function () {
    console.log("Server running on port " + PORT);
});
mongoose.connect(uri, function (error) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("Succesfully connected to MongoDB");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDaEMsSUFBQSxLQUE2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFwQyxHQUFHLGlCQUFBLEVBQUUsSUFBSSxVQUEyQixDQUFDO0FBQzFELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLElBQUEsS0FXRixPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFWbEMsWUFBWSxrQkFBQSxFQUNaLFlBQVksa0JBQUEsRUFDWixnQkFBZ0Isc0JBQUEsRUFDaEIsU0FBUyxlQUFBLEVBQ1QsY0FBYyxvQkFBQSxFQUNkLFVBQVUsZ0JBQUEsRUFDVixhQUFhLG1CQUFBLEVBQ2Isb0JBQW9CLDBCQUFBLEVBQ3BCLGdCQUFnQixzQkFBQSxFQUNoQixZQUFZLGtCQUNzQixDQUFDO0FBRXJDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hDLG9DQUFvQztBQUNwQyx1Q0FBdUM7QUFDdkMsbUNBQW1DO0FBQ25DLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0Msa0NBQWtDO0FBQ2xDLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLDBDQUEwQztBQUUxQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBMEIsSUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQVU7SUFDL0IsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==