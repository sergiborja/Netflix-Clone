"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
module.exports = function (req, res) {
    var favIdList = req.body.favList;
    var calla = 0;
    var filmsInfoRetrieved = [];
    favIdList.map(function (filmId) {
        film_1.default.findOne({ ytId: filmId }).then(function (filmFound) {
            filmsInfoRetrieved.push(filmFound);
            calla++;
        });
    });
    console.log(calla);
    console.log(filmsInfoRetrieved);
    if (calla === favIdList.length)
        res.send(filmsInfoRetrieved);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQW1DO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQVkzQyxJQUFNLFNBQVMsR0FBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEQsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksa0JBQWtCLEdBQXdCLEVBQUUsQ0FBQztJQUNqRCxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtRQUNuQixjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBYztZQUNqRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLE1BQU07UUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDIn0=