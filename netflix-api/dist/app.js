"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/netflix";
var cors = require("./essentials/cors");
var app = express();
var _a = require("./server-logics/index"), registerUser = _a.registerUser, retrieveUser = _a.retrieveUser, authenticateUser = _a.authenticateUser, addMember = _a.addMember, retrieveMember = _a.retrieveMember, createFilm = _a.createFilm, handleFavFilm = _a.handleFavFilm, retrieveFavFilmsInfo = _a.retrieveFavFilmsInfo;
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
app.get("/favFilms", retrieveFavFilmsInfo);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDdEMsSUFBTSxHQUFHLEdBQVcsbUNBQW1DLENBQUM7QUFDeEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDMUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDaEIsSUFBQSxLQVNGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQVJsQyxZQUFZLGtCQUFBLEVBQ1osWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixTQUFTLGVBQUEsRUFDVCxjQUFjLG9CQUFBLEVBQ2QsVUFBVSxnQkFBQSxFQUNWLGFBQWEsbUJBQUEsRUFDYixvQkFBb0IsMEJBQ2MsQ0FBQztBQUVyQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVEsRUFBRSxHQUFRO0lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUUzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFVO0lBQy9CLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMsQ0FBQyxDQUFDIn0=