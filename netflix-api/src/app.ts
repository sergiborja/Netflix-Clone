import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import bodyParser = require("body-parser");
import express = require("express");
import mongoose = require("mongoose");
const { MONGODB_URL: uri, PORT } = require("process").env;
const cors = require("./essentials/cors");
const app = express();
const api = require("./routes");

app.set("port", PORT);

app.use(cors);
app.use(bodyParser.json());

app.use("/api", api);

app.get("/", (req: Request, res: Response) => {
  res.send("NOT FOUND :(");
});

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${PORT}`);
});
try {
  mongoose.connect(uri, (error: Error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Succesfully connected to MongoDB");
    }
  });
} catch (error) {
  console.error("Could not connect to MongoDB", error);
}
