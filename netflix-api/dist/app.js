"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/netflix";
var cors = require("./essentials/cors");
var app = express();
var _a = require("./server-logics/index"), registerUser = _a.registerUser, retrieveUser = _a.retrieveUser, authenticateUser = _a.authenticateUser, addMember = _a.addMember, retrieveMember = _a.retrieveMember, createFilm = _a.createFilm, handleFavFilm = _a.handleFavFilm, retrieveFavFilmsInfo = _a.retrieveFavFilmsInfo, retrieveAllFilms = _a.retrieveAllFilms;
app.set("port", 3000);
app.use(cors);
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("NOT FOUND :(");
});
app.post("/users", registerUser);
app.post("/users/film", createFilm);
app.get("/users", retrieveUser);
app.get("/users/:nick?", retrieveMember);
app.post("/users/auth", authenticateUser);
app.patch("/users", addMember);
app.patch("/users/handleFavs", handleFavFilm);
app.post("/favFilms", retrieveFavFilmsInfo);
app.get("/allFilms", retrieveAllFilms);
app.listen(app.get("port"), function () {
    console.log("Server running on port 3000");
});
mongoose.connect(uri, function (error) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("Succesfully connected to MongoDB");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDdEMsSUFBTSxHQUFHLEdBQVcsbUNBQW1DLENBQUM7QUFDeEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDMUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDaEIsSUFBQSxLQVVGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQVRsQyxZQUFZLGtCQUFBLEVBQ1osWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixTQUFTLGVBQUEsRUFDVCxjQUFjLG9CQUFBLEVBQ2QsVUFBVSxnQkFBQSxFQUNWLGFBQWEsbUJBQUEsRUFDYixvQkFBb0IsMEJBQUEsRUFDcEIsZ0JBQWdCLHNCQUNrQixDQUFDO0FBRXJDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBVTtJQUMvQixJQUFJLEtBQUssRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDLENBQUMsQ0FBQyJ9