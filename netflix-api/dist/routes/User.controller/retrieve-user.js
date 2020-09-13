"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
var handleError = require("../../essentials/errors/handle-error");
var retrieveUser = require("../../server-logics").retrieveUser;
/**
If a token is recieved from req headers, retrieves the info of the userId from this token. Otherwise, listens to the body of the req and retrives the user according to that body.

*/
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nick, _a, token, userId;
    return __generator(this, function (_b) {
        try {
            if (!req.headers.authorization) {
                nick = req.body.nick;
                retrieveUser(nick)
                    .then(function (userFound) {
                    res.send(userFound);
                })
                    .catch(function (error) {
                    handleError(error, res);
                });
            }
            else if (req.headers.authorization) {
                _a = req.headers.authorization.split(" "), token = _a[1];
                userId = jwt.verify(token, SECRET).sub;
                retrieveUser(userId)
                    .then(function (userFound) {
                    res.send(userFound);
                })
                    .catch(function (error) {
                    handleError(error, res);
                });
            }
        }
        catch (error) {
            handleError(error, res);
        }
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy9Vc2VyLmNvbnRyb2xsZXIvcmV0cmlldmUtdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUzQixJQUFBLE1BQU0sR0FDWCxPQUFPLFdBREksQ0FDSDtBQUNaLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzVELElBQUEsWUFBWSxHQUFLLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFuQyxDQUFvQztBQUV4RDs7O0VBR0U7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7OztRQUNqRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUM7cUJBQ2YsSUFBSSxDQUFDLFVBQUMsU0FBdUI7b0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFZO29CQUNsQixXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hDLEtBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUE3QyxLQUFLLFFBQUEsQ0FBeUM7Z0JBQ2pELE1BQU0sR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ25ELFlBQVksQ0FBQyxNQUFNLENBQUM7cUJBQ2pCLElBQUksQ0FBQyxVQUFDLFNBQXVCO29CQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBWTtvQkFDbEIsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCOzs7S0FDRixDQUFDIn0=