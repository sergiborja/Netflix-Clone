"use strict";
var jwt = require("jsonwebtoken");
module.exports = {
    sign: function (payload, secret, options) {
        return new Promise(function (resolve, reject) {
            jwt.sign(payload, secret, options, function (error, token) {
                if (error)
                    return reject(error);
                resolve(token);
            });
        });
    },
    verify: function (token, secret) {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, secret, function (error, payload) {
                if (error)
                    return reject(error);
                resolve(payload);
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LXByb21pc2VkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZXNzZW50aWFscy9qd3QtcHJvbWlzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVwQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFKLFVBQUssT0FBWSxFQUFFLE1BQVcsRUFBRSxPQUFZO1FBQzFDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQUMsS0FBVSxFQUFFLEtBQVU7Z0JBQ3hELElBQUksS0FBSztvQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sS0FBVSxFQUFFLE1BQVc7UUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFDLEtBQVUsRUFBRSxPQUFZO2dCQUNqRCxJQUFJLEtBQUs7b0JBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWhDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMifQ==