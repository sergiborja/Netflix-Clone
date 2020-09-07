"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleError = require("../essentials/errors/handle-error");
var registerUser = require("../server-logics").registerUser;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImhhbmRsZXJzL3JlZ2lzdGVyLXVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUN6RCxJQUFBLFlBQVksR0FBSyxPQUFPLENBQUMsa0JBQWtCLENBQUMsYUFBaEMsQ0FBaUM7QUFFckQ7O0VBRUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDM0MsSUFBSTtRQUNGLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQ25CLElBQUksQ0FBQztZQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBVTtZQUNoQixXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDLENBQUMifQ==