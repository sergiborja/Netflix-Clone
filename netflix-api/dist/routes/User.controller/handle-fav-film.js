"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../../essentials/errors/handle-error");
var handleFavFilm = require("../../server-logics").handleFavFilm;
/**
Recieves the id of a film and a nick name. If the user with this nick already has this id in his favourite films array, it deletes it. Otherwise adds it. This is achieved due to the server logic we call from here.
*/
module.exports = function (req, res) {
    try {
        var _a = req.body, ytId = _a.ytId, nick = _a.nick;
        handleFavFilm(ytId, nick)
            .then(function (updatedFilms) {
            res.send(updatedFilms);
        })
            .catch(function (error) {
            handleError(error, res);
        });
    }
    catch (error) {
        handleError(error, res);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWZhdi1maWxtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL1VzZXIuY29udHJvbGxlci9oYW5kbGUtZmF2LWZpbG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUM1RCxJQUFBLGFBQWEsR0FBSyxPQUFPLENBQUMscUJBQXFCLENBQUMsY0FBbkMsQ0FBb0M7QUFFekQ7O0VBRUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSTtRQUVBLElBQUEsS0FDRSxHQUFHLEtBRGUsRUFBWixJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQUUsQ0FDZDtRQUNSLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFDLFlBQTJCO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBWTtZQUNsQixXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDLENBQUMifQ==