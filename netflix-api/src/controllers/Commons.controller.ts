import express from "express";
const { handleFavFilm } = require("./handlers");

const api = express.Router();

//Common (admin-members) model
api.patch("/users/fav-films", handleFavFilm);

module.exports = api;
