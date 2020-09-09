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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWZhdi1maWxtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2hhbmRsZXJzL2hhbmRsZS1mYXYtZmlsbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzVELElBQUEsYUFBYSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxjQUFuQyxDQUFvQztBQUV6RDs7RUFFRTtBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFJO1FBRUEsSUFBQSxLQUNFLEdBQUcsS0FEZSxFQUFaLElBQUksVUFBQSxFQUFFLElBQUksVUFBRSxDQUNkO1FBQ1IsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7YUFDdEIsSUFBSSxDQUFDLFVBQUMsWUFBMkI7WUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFVO1lBQ2hCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyJ9