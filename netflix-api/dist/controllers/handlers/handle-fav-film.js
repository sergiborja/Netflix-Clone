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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWZhdi1maWxtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvaGFuZGxlcnMvaGFuZGxlLWZhdi1maWxtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDNUQsSUFBQSxhQUFhLEdBQUssT0FBTyxDQUFDLHFCQUFxQixDQUFDLGNBQW5DLENBQW9DO0FBRXpEOztFQUVFO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLElBQUk7UUFFQSxJQUFBLEtBQ0UsR0FBRyxLQURlLEVBQVosSUFBSSxVQUFBLEVBQUUsSUFBSSxVQUFFLENBQ2Q7UUFDUixhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzthQUN0QixJQUFJLENBQUMsVUFBQyxZQUEyQjtZQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQVU7WUFDaEIsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyxDQUFDIn0=