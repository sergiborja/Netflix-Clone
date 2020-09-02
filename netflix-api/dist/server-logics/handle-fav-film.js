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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../schemas/user"));
var member_1 = __importDefault(require("../schemas/member"));
var UnexistenceError = require("../essentials/errors/error-builder").UnexistenceError;
var handleError = require("../essentials/errors/handle-error");
var SECRET = process.env.SECRET;
var jwt = require("jsonwebtoken");
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ytId_1, token, userId, userFound, updatedFavFilmList, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                ytId_1 = req.body.ytId;
                token = void 0;
                userId = void 0;
                if (req.headers.authorization)
                    _a = req.headers.authorization.split(" "), token = _a[1];
                userId = jwt.verify(token, SECRET).sub;
                if (!userId)
                    throw new UnexistenceError("There is no user asociated with this token");
                return [4 /*yield*/, member_1.default.findById(userId)];
            case 1:
                userFound = _b.sent();
                if (!!userFound) return [3 /*break*/, 3];
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 2:
                userFound = _b.sent();
                _b.label = 3;
            case 3:
                updatedFavFilmList = userFound.films.filter(function (film) { return film !== ytId_1; });
                if (JSON.stringify(updatedFavFilmList) === JSON.stringify(userFound.films)) {
                    updatedFavFilmList.push(ytId_1);
                }
                userFound.films = updatedFavFilmList;
                return [4 /*yield*/, userFound.save()];
            case 4:
                _b.sent();
                res.send(userFound.films);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                handleError(error_1, res);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWZhdi1maWxtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2VydmVyLWxvZ2ljcy9oYW5kbGUtZmF2LWZpbG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBeUM7QUFDekMsNkRBQXVDO0FBQy9CLElBQUEsZ0JBQWdCLEdBQUssT0FBTyxDQUFDLG9DQUFvQyxDQUFDLGlCQUFsRCxDQUFtRDtBQUMzRSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUV4RCxJQUFBLE1BQU0sR0FDWCxPQUFPLFdBREksQ0FDSDtBQUNaLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVwQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7Ozs7Z0JBR3JDLFNBQ04sR0FBRyxVQURPLENBQ047Z0JBRUosS0FBSyxTQUFBLENBQUM7Z0JBQ04sTUFBTSxTQUFBLENBQUM7Z0JBRVgsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7b0JBQzNCLEtBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUE3QyxLQUFLLFFBQUEsQ0FBeUM7Z0JBQ25ELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBRXZDLElBQUksQ0FBQyxNQUFNO29CQUNULE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2dCQUV0RCxxQkFBTSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Z0JBQTlDLFNBQVMsR0FBUSxTQUE2QjtxQkFDOUMsQ0FBQyxTQUFTLEVBQVYsd0JBQVU7Z0JBQWMscUJBQU0sY0FBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Z0JBQTdDLFNBQVMsR0FBRyxTQUFpQyxDQUFDOzs7Z0JBRXhELGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUMvQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksS0FBSyxNQUFJLEVBQWIsQ0FBYSxDQUM3QixDQUFDO2dCQUNGLElBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN0RTtvQkFDQSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7aUJBQy9CO2dCQUNELFNBQVMsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ3JDLHFCQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7Z0JBQXRCLFNBQXNCLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O2dCQUUxQixXQUFXLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7OztLQUUzQixDQUFDIn0=