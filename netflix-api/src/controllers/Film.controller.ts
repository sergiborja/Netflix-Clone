import express from "express";
const { createFilm, retrieveAllFilms } = require("./handlers");
const { retrieveFavFilmsInfo } = require("../server-logics");

const api = express.Router();

//Film model
api.post("/films", createFilm);
api.post("/films/favs", retrieveFavFilmsInfo);
api.get("/films", retrieveAllFilms);

module.exports = api;
