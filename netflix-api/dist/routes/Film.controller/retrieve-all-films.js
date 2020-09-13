"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../../essentials/errors/handle-error");
var retrieveAllFilms = require("../../server-logics").retrieveAllFilms;
/**
Retrieves all the films from the database.
*/
module.exports = function (req, res) {
    try {
        retrieveAllFilms()
            .then(function (allFilms) {
            res.send(allFilms);
        })
            .catch(function (error) {
            handleError(error, res);
        });
    }
    catch (error) {
        handleError(error, res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtYWxsLWZpbG1zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL0ZpbG0uY29udHJvbGxlci9yZXRyaWV2ZS1hbGwtZmlsbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUM1RCxJQUFBLGdCQUFnQixHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBbkMsQ0FBb0M7QUFFNUQ7O0VBRUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSTtRQUNGLGdCQUFnQixFQUFFO2FBQ2YsSUFBSSxDQUFDLFVBQUMsUUFBNkI7WUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFZO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyJ9