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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNjaGVtYXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFFekIsUUFBQSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtJQUN6QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Q0FDeEMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ2hELGtCQUFlLElBQUksQ0FBQyJ9