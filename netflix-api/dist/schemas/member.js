"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = exports.Member = void 0;
var mongoose = require("mongoose");
var Member = /** @class */ (function () {
    function Member(data) {
        this.nick = data.nick;
        this.character = data.character;
        this.films = data.films;
    }
    return Member;
}());
exports.Member = Member;
var schema = new mongoose.Schema({
    nick: { type: String, required: true },
    films: [{ type: String, required: false }],
    character: { type: String, required: true },
});
exports.MemberSchema = mongoose.model("Member", schema);
exports.default = exports.MemberSchema;
// export const MemberSchema = new mongoose.Schema({
//   nick: { type: String, required: true },
//   films: [{ type: String, required: false }],
//   character: { type: String, required: true },
// });
// const Member = mongoose.model("Member", MemberSchema);
// export default Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NoZW1hcy9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBR3RDO0lBS0UsZ0JBQVksSUFBK0Q7UUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLHdCQUFNO0FBWW5CLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMxQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDNUMsQ0FBQyxDQUFDO0FBSVUsUUFBQSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFN0Qsa0JBQWUsb0JBQVksQ0FBQztBQUU1QixvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLGdEQUFnRDtBQUNoRCxpREFBaUQ7QUFDakQsTUFBTTtBQUVOLHlEQUF5RDtBQUN6RCx5QkFBeUIifQ==