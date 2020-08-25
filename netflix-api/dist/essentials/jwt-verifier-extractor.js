"use strict";
var jwtPromised = require("./jwt-promised");
module.exports = function (secret, errorHandler) { return function (req, res, next) {
    if (req.header("authorization")) {
        try {
            var _a = req.header("authorization").split(" "), token = _a[1];
            jwtPromised
                .verify(token, secret)
                .then(function (payload) {
                req.payload = payload;
                next();
            })
                .catch(function (error) { return errorHandler(error, res); });
        }
        catch (error) {
            errorHandler(error, res);
        }
    }
    else {
        next();
    }
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LXZlcmlmaWVyLWV4dHJhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImVzc2VudGlhbHMvand0LXZlcmlmaWVyLWV4dHJhY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFOUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLE1BQVcsRUFBRSxZQUFpQixJQUFLLE9BQUEsVUFDbkQsR0FBUSxFQUNSLEdBQVEsRUFDUixJQUFTO0lBRVQsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQy9CLElBQUk7WUFDSSxJQUFBLEtBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQS9DLEtBQUssUUFBMEMsQ0FBQztZQUV6RCxXQUFXO2lCQUNSLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2lCQUNyQixJQUFJLENBQUMsVUFBQyxPQUFZO2dCQUNqQixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFFdEIsSUFBSSxFQUFFLENBQUM7WUFDVCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1NBQ3BEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0tBQ0Y7U0FBTTtRQUNMLElBQUksRUFBRSxDQUFDO0tBQ1I7QUFDSCxDQUFDLEVBdkJvRCxDQXVCcEQsQ0FBQyJ9