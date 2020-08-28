"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/netflix";
var cors = require("./essentials/cors");
var app = express();
var _a = require("./server-logics/index"), registerUser = _a.registerUser, retrieveUser = _a.retrieveUser, authenticateUser = _a.authenticateUser, addMember = _a.addMember, retrieveMember = _a.retrieveMember, createFilm = _a.createFilm, handleFavFilm = _a.handleFavFilm;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDdEMsSUFBTSxHQUFHLEdBQVcsbUNBQW1DLENBQUM7QUFDeEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDMUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDaEIsSUFBQSxLQVFGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQVBsQyxZQUFZLGtCQUFBLEVBQ1osWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixTQUFTLGVBQUEsRUFDVCxjQUFjLG9CQUFBLEVBQ2QsVUFBVSxnQkFBQSxFQUNWLGFBQWEsbUJBQ3FCLENBQUM7QUFFckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUTtJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRTlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQVU7SUFDL0IsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==