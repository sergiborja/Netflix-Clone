import mongoose = require("mongoose");

const uri: string = "mongodb://localhost:27017/netflix";

mongoose.connect(uri, (error: any) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Succesfully connected to MongoDB");
  }
});

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  members: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
