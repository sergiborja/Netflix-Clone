"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var film_1 = __importDefault(require("../schemas/film"));
var error_builder_1 = require("../essentials/errors/error-builder");
var handleError = require("../essentials/errors/handle-error");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZmF2LWZpbG1zLWluZm8uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL3JldHJpZXZlLWZhdi1maWxtcy1pbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQXFEO0FBQ3JELG9FQUFzRTtBQUN0RSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUVqRSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSTtRQUNGLElBQU0sV0FBUyxHQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxJQUFJLG9CQUFrQixHQUF3QixFQUFFLENBQUM7UUFDakQsV0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07WUFDbkIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztpQkFDM0IsSUFBSSxDQUFDLFVBQUMsU0FBYztnQkFDbkIsb0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLG9CQUFrQixDQUFDLE1BQU0sS0FBSyxXQUFTLENBQUMsTUFBTSxFQUFFO29CQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFrQixDQUFDLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1gsTUFBTSxJQUFJLGdDQUFnQixDQUN4QiwwQ0FBMEMsQ0FDM0MsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyJ9