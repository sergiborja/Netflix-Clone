"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
var mongoose = require("mongoose");
exports.MemberSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    films: { type: Array, required: false },
    character: { type: String, required: true },
});
var Member = mongoose.model("Member", exports.MemberSchema);
exports.default = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NoZW1hcy9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBRXpCLFFBQUEsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3ZDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUM1QyxDQUFDLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxvQkFBWSxDQUFDLENBQUM7QUFDdEQsa0JBQWUsTUFBTSxDQUFDIn0=