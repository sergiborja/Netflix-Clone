import express from "express";
const {
  addMember,
  authenticateUser,
  createFilm,
  deleteMember,
  handleFavFilm,
  registerUser,
  retrieveAllFilms,
  retrieveMember,
  retrieveUser,
} = require("./handlers");
const { retrieveFavFilmsInfo } = require("../server-logics");

const api = express.Router();

api.post("/users", registerUser);
api.post("/films", createFilm);
api.get("/users/single", retrieveUser);
api.get("/members/:nick?", retrieveMember);
api.post("/users/auth", authenticateUser);
api.patch("/members", addMember);
api.patch("/users/fav-films", handleFavFilm);
api.patch("/members/delete-one", deleteMember);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);

module.exports = api;
