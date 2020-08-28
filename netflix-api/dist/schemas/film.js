"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmSchema = void 0;
var mongoose = require("mongoose");
exports.FilmSchema = new mongoose.Schema({
    ytId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: Array, required: true },
    time: { type: String, required: true },
});
var Film = mongoose.model("Film", exports.FilmSchema);
exports.default = Film;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNjaGVtYXMvZmlsbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFFekIsUUFBQSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDdkMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ2hELGtCQUFlLElBQUksQ0FBQyJ9