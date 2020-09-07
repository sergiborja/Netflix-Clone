"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../essentials/errors/handle-error");
var retrieveAllFilms = require("../server-logics").retrieveAllFilms;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtYWxsLWZpbG1zLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiaGFuZGxlcnMvcmV0cmlldmUtYWxsLWZpbG1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDekQsSUFBQSxnQkFBZ0IsR0FBSyxPQUFPLENBQUMsa0JBQWtCLENBQUMsaUJBQWhDLENBQWlDO0FBRXpEOztFQUVFO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLElBQUk7UUFDRixnQkFBZ0IsRUFBRTthQUNmLElBQUksQ0FBQyxVQUFDLFFBQTZCO1lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBVTtZQUNoQixXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDLENBQUMifQ==