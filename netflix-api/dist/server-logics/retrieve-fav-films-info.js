"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
module.exports = function (req, res) {
    // type expectedBody = {
    //   ytId: string;
    //   gender: Array<string>;
    //   name: string;
    //   description: string;
    //   time: string;
    //   cover: string;
    //   __v: number;
    //   _id: string;
    // };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQXFEO0FBRXJELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixLQUFLO0lBRUwsSUFBTSxTQUFTLEdBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2xELElBQUksa0JBQWtCLEdBQXdCLEVBQUUsQ0FBQztJQUNqRCxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtRQUNuQixjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzNCLElBQUksQ0FBQyxVQUFDLFNBQWM7WUFDbkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==