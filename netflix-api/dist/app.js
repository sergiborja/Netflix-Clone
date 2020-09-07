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
var 
// registerUser,
// retrieveUser,
// authenticateUser,
// addMember,
// retrieveMember,
// createFilm,
// handleFavFilm,
retrieveFavFilmsInfo = require("./server-logics/index").retrieveFavFilmsInfo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsd0NBQTJDO0FBQzNDLGlDQUFvQztBQUNwQyxtQ0FBc0M7QUFDaEMsSUFBQSxLQUE2QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFwQyxHQUFHLGlCQUFBLEVBQUUsSUFBSSxVQUEyQixDQUFDO0FBQzFELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBU3BCO0FBUEEsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLG9CQUFvQixHQUdsQixPQUFPLENBQUMsdUJBQXVCLENBQUMscUJBSGQsQ0FHZTtBQUUvQixJQUFBLEtBV0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQVZ2QixTQUFTLGVBQUEsRUFDVCxnQkFBZ0Isc0JBQUEsRUFDaEIsVUFBVSxnQkFBQSxFQUNWLFlBQVksa0JBQUEsRUFDWixhQUFhLG1CQUFBLEVBQ2IsWUFBWSxrQkFBQSxFQUNaLGdCQUFnQixzQkFBQSxFQUNoQixjQUFjLG9CQUFBLEVBQ2QsWUFBWSxrQkFFVyxDQUFDO0FBRTFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVE7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXBDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixJQUFNLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNILElBQUk7SUFDRixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQVU7UUFDL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSjtBQUFDLE9BQU8sS0FBSyxFQUFFO0lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUN0RCJ9