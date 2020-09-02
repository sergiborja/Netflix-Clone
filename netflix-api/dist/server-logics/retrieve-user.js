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
var user_1 = __importDefault(require("./../schemas/user"));
var error_builder_1 = require("../essentials/errors/error-builder");
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
var handleError = require("../essentials/errors/handle-error");
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userFound, nick, films, email, members, character, _a, token, userId, _userFound, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                if (!!req.headers.authorization) return [3 /*break*/, 2];
                return [4 /*yield*/, user_1.default.findOne(req.body)];
            case 1:
                userFound = _b.sent();
                if (!userFound)
                    throw new error_builder_1.UnexistenceError("This user doesn't exist");
                nick = userFound.nick, films = userFound.films, email = userFound.email, members = userFound.members, character = userFound.character;
                res.send({ nick: nick, films: films, email: email, members: members, character: character });
                return [3 /*break*/, 4];
            case 2:
                if (!req.headers.authorization) return [3 /*break*/, 4];
                _a = req.headers.authorization.split(" "), token = _a[1];
                userId = jwt.verify(token, SECRET).sub;
                return [4 /*yield*/, user_1.default.findById(userId)];
            case 3:
                _userFound = _b.sent();
                if (!_userFound)
                    throw new error_builder_1.UnexistenceError("This user doesn't exist");
                res.send(_userFound);
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                handleError(error_1, res);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvcmV0cmlldmUtdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUE2RDtBQUM3RCxvRUFBc0U7QUFDdEUsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTNCLElBQUEsTUFBTSxHQUNYLE9BQU8sV0FESSxDQUNIO0FBQ1osSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFFakUsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7cUJBRTNDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQTFCLHdCQUEwQjtnQkFDTCxxQkFBTSxjQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQW5ELFNBQVMsR0FBUSxTQUFrQztnQkFDekQsSUFBSSxDQUFDLFNBQVM7b0JBQUUsTUFBTSxJQUFJLGdDQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQzlELElBQUksR0FBdUMsU0FBUyxLQUFoRCxFQUFFLEtBQUssR0FBZ0MsU0FBUyxNQUF6QyxFQUFFLEtBQUssR0FBeUIsU0FBUyxNQUFsQyxFQUFFLE9BQU8sR0FBZ0IsU0FBUyxRQUF6QixFQUFFLFNBQVMsR0FBSyxTQUFTLFVBQWQsQ0FBZTtnQkFDN0QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQzs7O3FCQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBekIsd0JBQXlCO2dCQUM5QixLQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBN0MsS0FBSyxRQUFBLENBQXlDO2dCQUNqRCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN4QixxQkFBTSxjQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBOUMsVUFBVSxHQUFHLFNBQWlDO2dCQUNwRCxJQUFJLENBQUMsVUFBVTtvQkFBRSxNQUFNLElBQUksZ0NBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Z0JBR3ZCLFdBQVcsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7O0tBRTNCLENBQUMifQ==