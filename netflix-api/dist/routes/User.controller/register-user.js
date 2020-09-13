"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../../essentials/errors/handle-error");
var registerUser = require("../../server-logics").registerUser;
/**
Recieves the data of the new user that wants to be created as req, we send it to the server logic, if everything is correct, we will send an status 201.
*/
module.exports = function (req, res) {
    try {
        registerUser(req.body)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9Vc2VyLmNvbnRyb2xsZXIvcmVnaXN0ZXItdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzVELElBQUEsWUFBWSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFuQyxDQUFvQztBQUV4RDs7RUFFRTtBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMzQyxJQUFJO1FBQ0YsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDbkIsSUFBSSxDQUFDO1lBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFZO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QjtBQUNILENBQUMsQ0FBQyJ9