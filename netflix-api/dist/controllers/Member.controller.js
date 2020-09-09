"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var _a = require("./handlers"), addMember = _a.addMember, deleteMember = _a.deleteMember, retrieveMember = _a.retrieveMember;
var api = express_1.default.Router();
//Member model
api.get("/members/:nick?", retrieveMember);
api.patch("/members", addMember);
api.patch("/members/delete-one", deleteMember);
module.exports = api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9NZW1iZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUN4QixJQUFBLEtBQThDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBakUsU0FBUyxlQUFBLEVBQUUsWUFBWSxrQkFBQSxFQUFFLGNBQWMsb0JBQTBCLENBQUM7QUFFMUUsSUFBTSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU3QixjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDIn0=