"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    members: { type: Array, required: false },
    films: { type: Array, required: false },
});
var User = mongoose.model("User", exports.UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBRXpCLFFBQUEsVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDekMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0NBQ3hDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUNoRCxrQkFBZSxJQUFJLENBQUMifQ==