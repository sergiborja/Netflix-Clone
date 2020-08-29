import bodyParser = require("body-parser");
import express = require("express");
import mongoose = require("mongoose");
const uri: string = "mongodb://localhost:27017/netflix";
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

app.set("port", 3000);

app.use(cors);
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("NOT FOUND :(");
});

app.post("/users", registerUser);
app.post("/users/film", createFilm);
app.get("/users", retrieveUser);
app.get("/users/:nick?", retrieveMember);
app.post("/users/auth", authenticateUser);
app.patch("/users", addMember);
app.patch("/users/handleFavs", handleFavFilm);
app.patch("/users/delMember", deleteMember);
app.post("/favFilms", retrieveFavFilmsInfo);
app.get("/allFilms", retrieveAllFilms);

app.listen(app.get("port"), () => {
  console.log("Server running on port 3000");
});

mongoose.connect(uri, (error: any) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Succesfully connected to MongoDB");
  }
});
