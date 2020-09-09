import express from "express";
const { addMember, deleteMember, retrieveMember } = require("./handlers");

const api = express.Router();

//Member model
api.get("/members/:nick?", retrieveMember);
api.patch("/members", addMember);
api.patch("/members/delete-one", deleteMember);

module.exports = api;
