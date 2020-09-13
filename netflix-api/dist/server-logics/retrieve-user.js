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
/**
If a token is recieved from req headers, retrieves the info of the userId from this token. Otherwise, listens to the body of the req and retrives the user according to that body.

@param {string} req.body The body.
or
@param {string} nick The nick name.

@throws {UnexistenceError} If the user cannot be found.
*/
module.exports = function (userInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var userFound;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.findOne({ nick: userInfo })];
            case 1:
                userFound = _a.sent();
                if (!!userFound) return [3 /*break*/, 3];
                return [4 /*yield*/, user_1.default.findById(userInfo)];
            case 2:
                userFound = _a.sent();
                _a.label = 3;
            case 3:
                if (!userFound)
                    throw new error_builder_1.UnexistenceError("This user doesn't exist");
                userFound.password = undefined;
                return [2 /*return*/, userFound];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvcmV0cmlldmUtdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUE2RDtBQUM3RCxvRUFBc0U7QUFFdEU7Ozs7Ozs7O0VBUUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQU8sUUFBZ0I7Ozs7b0JBQ2pCLHFCQUFNLGNBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQTs7Z0JBQTdELFNBQVMsR0FBUSxTQUE0QztxQkFDN0QsQ0FBQyxTQUFTLEVBQVYsd0JBQVU7Z0JBQWMscUJBQU0sY0FBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQTs7Z0JBQS9DLFNBQVMsR0FBRyxTQUFtQyxDQUFDOzs7Z0JBQ2hFLElBQUksQ0FBQyxTQUFTO29CQUFFLE1BQU0sSUFBSSxnQ0FBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUV0RSxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztnQkFFL0Isc0JBQU8sU0FBUyxFQUFDOzs7S0FDbEIsQ0FBQyJ9