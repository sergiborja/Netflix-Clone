import express from "express";
const { authenticateUser, registerUser, retrieveUser } = require("./handlers");

const api = express.Router();

//User (admin) model
api.post("/users", registerUser);
api.get("/users/single", retrieveUser);
api.post("/users/auth", authenticateUser);

module.exports = api;
