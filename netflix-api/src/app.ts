import * as dotenv from "dotenv";
dotenv.config();
import bodyParser = require("body-parser");
import express = require("express");
import mongoose = require("mongoose");
const { MONGODB_URL: uri, PORT } = require("process").env;
const cors = require("./essentials/cors");
const app = express();
const api = require("./controllers");

app.set("port", PORT);

app.use(cors);
app.use(bodyParser.json());

app.use("/api", api);

app.get("/", (req: any, res: any) => {
  res.send("NOT FOUND :(");
});

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
