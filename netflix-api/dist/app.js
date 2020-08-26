"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var uri = "mongodb://localhost:27017/netflix";
var cors = require("./essentials/cors");
var app = express();
var _a = require("./server-logics/index"), registerUser = _a.registerUser, retrieveUser = _a.retrieveUser, authenticateUser = _a.authenticateUser, addMember = _a.addMember;
app.set("port", 3000);
app.use(cors);
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("NOT FOUND :(");
});
app.post("/users", registerUser);
app.get("/users", retrieveUser);
app.post("/user", authenticateUser);
app.patch("/users", addMember);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDdEMsSUFBTSxHQUFHLEdBQVcsbUNBQW1DLENBQUM7QUFDeEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDMUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDaEIsSUFBQSxLQUtGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUpsQyxZQUFZLGtCQUFBLEVBQ1osWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixTQUFTLGVBQ3lCLENBQUM7QUFFckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUTtJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUUvQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFVO0lBQy9CLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMsQ0FBQyxDQUFDIn0=