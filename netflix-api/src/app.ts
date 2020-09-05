import * as dotenv from "dotenv";
dotenv.config();
import bodyParser = require("body-parser");
import express = require("express");
import mongoose = require("mongoose");
const { MONGODB_URL: uri, PORT } = require("process").env;
const cors = require("./essentials/cors");
const app = express();
const {
  registerUser,
  retrieveUser,
  authenticateUser,
  addMember,
  retrieveMember,
  createFilm,
  handleFavFilm,
  retrieveFavFilmsInfo,
  retrieveAllFilms,
  deleteMember,
} = require("./server-logics/index");

app.set("port", PORT);

app.use(cors);
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
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

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${PORT}`);
});
try {
  mongoose.connect(uri, (error: any) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Succesfully connected to MongoDB");
    }
  });
} catch (error) {
  console.error("Could not connect to MongoDB", error);
}
