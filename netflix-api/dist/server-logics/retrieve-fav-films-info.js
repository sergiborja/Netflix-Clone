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
        film_1.default.findOne({ ytId: filmId })
            .then(function (filmFound) {
            filmsInfoRetrieved.push(filmFound);
            if (filmsInfoRetrieved.length === favIdList.length) {
                res.send(filmsInfoRetrieved);
            }
        })
            .catch(function (error) {
            res.status(404).send("There was a problem finding this Film Id");
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQXFEO0FBRXJELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFNLFNBQVMsR0FBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEQsSUFBSSxrQkFBa0IsR0FBd0IsRUFBRSxDQUFDO0lBQ2pELFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNO1FBQ25CLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUMsU0FBYztZQUNuQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9