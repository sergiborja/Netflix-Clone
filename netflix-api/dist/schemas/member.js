"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
var mongoose = require("mongoose");
exports.MemberSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    films: [{ type: String, required: false }],
    character: { type: String, required: true },
});
var Member = mongoose.model("Member", exports.MemberSchema);
exports.default = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NoZW1hcy9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBR3pCLFFBQUEsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMxQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDNUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsb0JBQVksQ0FBQyxDQUFDO0FBQ3RELGtCQUFlLE1BQU0sQ0FBQyJ9