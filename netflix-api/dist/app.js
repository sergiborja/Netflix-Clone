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
var api = require("./routes");
// const { retrieveFavFilmsInfo } = require("./server-logics/index");
// const {
//   addMember,
//   authenticateUser,
//   createFilm,
//   deleteMember,
//   handleFavFilm,
//   registerUser,
//   retrieveAllFilms,
//   retrieveMember,
//   retrieveUser,
// } = require("./routes/handlers");
app.set("port", PORT);
app.use(cors);
app.use(bodyParser.json());
app.use("/api", api);
app.get("/", function (req, res) {
    res.send("NOT FOUND :(");
});
// app.post("/users", registerUser);
// app.post("/films", createFilm);
// app.get("/users/single", retrieveUser);
// app.get("/members/:nick?", retrieveMember);
// app.post("/users/auth", authenticateUser);
// app.patch("/members", addMember);
// app.patch("/users/fav-films", handleFavFilm);
// app.patch("/members/delete-one", deleteMember);
// app.post("/films/favs", retrieveFavFilmsInfo);
// app.get("/films", retrieveAllFilms);
app.listen(app.get("port"), function () {
    console.log("Server running on port " + PORT);
});
try {
    mongoose.connect(uri, function (error) {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log("Succesfully connected to MongoDB");
        }
    });
}
catch (error) {
    console.error("Could not connect to MongoDB", error);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDaEMsSUFBQSxLQUE2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFwQyxHQUFHLGlCQUFBLEVBQUUsSUFBSSxVQUEyQixDQUFDO0FBQzFELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoQyxxRUFBcUU7QUFFckUsVUFBVTtBQUNWLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLG9DQUFvQztBQUVwQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVyQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVEsRUFBRSxHQUFRO0lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCx1Q0FBdUM7QUFFdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLElBQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSTtJQUNGLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBVTtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDLENBQUMsQ0FBQztDQUNKO0FBQUMsT0FBTyxLQUFLLEVBQUU7SUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3REIn0=