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
var member_1 = __importDefault(require("../schemas/member"));
var error_builder_1 = require("../essentials/errors/error-builder");
var jwt = require("jsonwebtoken");
var SECRET = process.env.SECRET;
var handleError = require("../essentials/errors/handle-error");
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nick, character, token, userId, nickFound, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, nick = _a.nick, character = _a.character;
                if (req.headers.authorization)
                    _b = req.headers.authorization.split(" "), token = _b[1];
                userId = jwt.verify(token, SECRET).sub;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, member_1.default.findOne({ nick: nick })];
            case 2:
                nickFound = _c.sent();
                if (nickFound) {
                    throw new error_builder_1.DuplicityError("This nick name already exists");
                }
                else {
                    user_1.default.findById(userId)
                        .then(function (user) {
                        user.members.push({ nick: nick, character: character });
                        user.save();
                        member_1.default.create(req.body)
                            .then(function () { return res.status(204).send(); })
                            .catch(function (error) { return handleError(error, res); });
                    })
                        .catch(function (error) { return handleError(error, res); });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                handleError(error_1, res);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvYWRkLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUEyQztBQUMzQyw2REFBdUM7QUFDdkMsb0VBQW9FO0FBQ3BFLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUzQixJQUFBLE1BQU0sR0FDWCxPQUFPLFdBREksQ0FDSDtBQUNaLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRWpFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUUvQyxLQUNFLEdBQUcsS0FEb0IsRUFBakIsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFBLENBQ2pCO2dCQUdSLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO29CQUMzQixLQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBN0MsS0FBSyxRQUFBLENBQXlDO2dCQUNuRCxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDOzs7O2dCQUVuQixxQkFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQTFDLFNBQVMsR0FBRyxTQUE4QjtnQkFDaEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsTUFBTSxJQUFJLDhCQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQztpQkFDM0Q7cUJBQU07b0JBQ0wsY0FBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7eUJBQ3hCLElBQUksQ0FBQyxVQUFDLElBQVM7d0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDWixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDOzZCQUNwQixJQUFJLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7NkJBQ2xDLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztpQkFDOUM7Ozs7Z0JBRUQsV0FBVyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7S0FFM0IsQ0FBQyJ9