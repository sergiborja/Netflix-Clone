"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
var error_builder_1 = require("../essentials/errors/error-builder");
var handleError = require("../essentials/errors/handle-error");
/**
Recieves the id of a film and returns the whole information of that film.
@param {Array<string>} favIdList The list of ids (favourite user films).
@throws {UnexistenceError} If the id is incorrect.
*/
module.exports = function (req, res) {
    try {
        var favIdList_1 = req.body.favList;
        var filmsInfoRetrieved_1 = [];
        favIdList_1.map(function (filmId) {
            film_1.default.findOne({ ytId: filmId })
                .then(function (filmFound) {
                filmsInfoRetrieved_1.push(filmFound);
                if (filmsInfoRetrieved_1.length === favIdList_1.length) {
                    res.send(filmsInfoRetrieved_1);
                }
            })
                .catch(function (error) {
                throw new error_builder_1.UnexistenceError("There was a problem finding this Film Id");
            });
        });
    }
    catch (error) {
        handleError(error, res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQXFEO0FBQ3JELG9FQUFzRTtBQUN0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUVqRTs7OztFQUlFO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLElBQUk7UUFDRixJQUFNLFdBQVMsR0FBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxvQkFBa0IsR0FBd0IsRUFBRSxDQUFDO1FBQ2pELFdBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNO1lBQ25CLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQzNCLElBQUksQ0FBQyxVQUFDLFNBQWM7Z0JBQ25CLG9CQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxvQkFBa0IsQ0FBQyxNQUFNLEtBQUssV0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLE1BQU0sSUFBSSxnQ0FBZ0IsQ0FDeEIsMENBQTBDLENBQzNDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDLENBQUMifQ==