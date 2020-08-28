"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
module.exports = function (req, res) {
    var favIdList = req.body.favList;
    var filmsInfoRetrieved = [];
    favIdList.map(function (filmId) {
        film_1.default.findOne({ ytId: filmId }).then(function (filmFound) {
            filmsInfoRetrieved.push(filmFound);
            if (filmsInfoRetrieved.length === favIdList.length)
                res.send(filmsInfoRetrieved);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQW1DO0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQVkzQyxJQUFNLFNBQVMsR0FBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEQsSUFBSSxrQkFBa0IsR0FBd0IsRUFBRSxDQUFDO0lBQ2pELFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNO1FBQ25CLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFjO1lBQ2pELGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTTtnQkFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==