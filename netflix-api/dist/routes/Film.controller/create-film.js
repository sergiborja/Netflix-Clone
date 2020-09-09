"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../../essentials/errors/handle-error");
var createFilm = require("../../server-logics").createFilm;
/**
Recieves all the info of the film that wants to be added in the Req and sends it to the server logic, if everything is correct, success status is gonna be sent as Res.
*/
module.exports = function (req, res) {
    try {
        createFilm(req.body)
            .then(function () {
            res.status(201).send();
        })
            .catch(function (error) {
            handleError(error, res);
        });
    }
    catch (error) {
        handleError(error, res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWZpbG0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvRmlsbS5jb250cm9sbGVyL2NyZWF0ZS1maWxtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDNUQsSUFBQSxVQUFVLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLFdBQW5DLENBQW9DO0FBRXREOztFQUVFO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLElBQUk7UUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUNqQixJQUFJLENBQUM7WUFDSixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQVU7WUFDaEIsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyxDQUFDIn0=