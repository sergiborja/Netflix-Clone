import bodyParser = require("body-parser");
import express = require("express");
const userController = require("./controllers/userController");
const cors = require("./essentials/cors");
const app = express();

app.set("port", 3000);

app.use(cors);
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("NOT FOUND :(");
});

app.post("/users", userController.newUser);
app.get("/users", userController.getUser);
app.post("/user", userController.authUser);
app.patch("/users", userController.addMember);

app.listen(app.get("port"), () => {
  console.log("Server running on port 3000");
});
