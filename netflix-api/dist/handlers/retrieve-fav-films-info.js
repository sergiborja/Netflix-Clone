"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../essentials/errors/handle-error");
var retrieveFavFilmsInfo = require("../server-logics").retrieveFavFilmsInfo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJoYW5kbGVycy9yZXRyaWV2ZS1mYXYtZmlsbXMtaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3pELElBQUEsb0JBQW9CLEdBQUssT0FBTyxDQUFDLGtCQUFrQixDQUFDLHFCQUFoQyxDQUFpQztBQUU3RDs7Ozs7O0VBTUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSTtRQUNGLElBQU0sU0FBUyxHQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7YUFDNUIsSUFBSSxDQUFDLFVBQUMsa0JBQXVDO1lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFVO1lBQ2hCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyJ9