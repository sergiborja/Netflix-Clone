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
var retrieveFavFilmsInfo = require("./server-logics/index").retrieveFavFilmsInfo;
var _b = require("./handlers"), addMember = _b.addMember, authenticateUser = _b.authenticateUser, createFilm = _b.createFilm, deleteMember = _b.deleteMember, handleFavFilm = _b.handleFavFilm, registerUser = _b.registerUser, retrieveAllFilms = _b.retrieveAllFilms, retrieveMember = _b.retrieveMember, retrieveUser = _b.retrieveUser;
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
app.get("/films", retrieveAllFilms);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDaEMsSUFBQSxLQUE2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFwQyxHQUFHLGlCQUFBLEVBQUUsSUFBSSxVQUEyQixDQUFDO0FBQzFELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ2QsSUFBQSxvQkFBb0IsR0FBSyxPQUFPLENBQUMsdUJBQXVCLENBQUMscUJBQXJDLENBQXNDO0FBRTVELElBQUEsS0FVRixPQUFPLENBQUMsWUFBWSxDQUFDLEVBVHZCLFNBQVMsZUFBQSxFQUNULGdCQUFnQixzQkFBQSxFQUNoQixVQUFVLGdCQUFBLEVBQ1YsWUFBWSxrQkFBQSxFQUNaLGFBQWEsbUJBQUEsRUFDYixZQUFZLGtCQUFBLEVBQ1osZ0JBQWdCLHNCQUFBLEVBQ2hCLGNBQWMsb0JBQUEsRUFDZCxZQUFZLGtCQUNXLENBQUM7QUFFMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUTtJQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLElBQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSTtJQUNGLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBVTtRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDLENBQUMsQ0FBQztDQUNKO0FBQUMsT0FBTyxLQUFLLEVBQUU7SUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3REIn0=