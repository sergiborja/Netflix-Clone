"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
var mongoose = require("mongoose");
exports.MemberSchema = new mongoose.Schema({
    nick: { type: String, required: true },
    films: { type: Array, required: false },
});
var Member = mongoose.model("Member", exports.MemberSchema);
exports.default = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFzQztBQUV6QixRQUFBLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3RDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtDQUN4QyxDQUFDLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxvQkFBWSxDQUFDLENBQUM7QUFDdEQsa0JBQWUsTUFBTSxDQUFDIn0=