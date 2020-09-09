"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../../essentials/errors/handle-error");
var retrieveFavFilmsInfo = require("../../server-logics").retrieveFavFilmsInfo;
/**
Recieves the id of a film and returns the whole information of that film.

@param {Array<string>} favIdList The list of ids (favourite user films).

@throws {UnexistenceError} If the id is incorrect.
*/
module.exports = function (req, res) {
    try {
        var favIdList = req.body.favList;
        retrieveFavFilmsInfo(favIdList)
            .then(function (filmsInfoRetrieved) {
            res.send(filmsInfoRetrieved);
        })
            .catch(function (error) {
            handleError(error, res);
        });
    }
    catch (error) {
        handleError(error, res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvRmlsbS5jb250cm9sbGVyL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDNUQsSUFBQSxvQkFBb0IsR0FBSyxPQUFPLENBQUMscUJBQXFCLENBQUMscUJBQW5DLENBQW9DO0FBRWhFOzs7Ozs7RUFNRTtBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFJO1FBQ0YsSUFBTSxTQUFTLEdBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xELG9CQUFvQixDQUFDLFNBQVMsQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQyxrQkFBdUM7WUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQVU7WUFDaEIsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyxDQUFDIn0=