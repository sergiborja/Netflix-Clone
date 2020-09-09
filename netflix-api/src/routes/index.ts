import express from "express";
const { createFilm, retrieveAllFilms } = require("./Film.controller");
const { retrieveFavFilmsInfo } = require("../server-logics");
const {
  addMember,
  deleteMember,
  retrieveMember,
} = require("./Member.controller");
const {
  authenticateUser,
  registerUser,
  retrieveUser,
  handleFavFilm,
} = require("./User.controller");

const api = express.Router();

//Common (admin-members) model
api.patch("/users/fav-films", handleFavFilm);

//Film model
api.post("/films", createFilm);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);

//Member model
api.get("/members/:nick?", retrieveMember);
api.patch("/members", addMember);
api.patch("/members/delete-one", deleteMember);

//User (admin) model
api.post("/users", registerUser);
api.get("/users/single", retrieveUser);
api.post("/users/auth", authenticateUser);

module.exports = api;
