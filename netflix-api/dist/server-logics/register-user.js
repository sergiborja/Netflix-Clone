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
var error_builder_1 = require("../essentials/errors/error-builder");
var handleError = require("../essentials/errors/handle-error");
/**
Recieves the data of the new user that wants to be created.

@param {string} name The name of the new user.
@param {string} surname The surname of the new user.
@param {string} password The password of the new user.
@param {string} character The character of the new user.

@throws {DuplicityError} If the email is already registered to our database.
@throws {DuplicityError} If the nick name is already registered to our database.
*/
module.exports = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nick, email, password, character, nickFound, emailFound, userCreated, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, nick = _a.nick, email = _a.email, password = _a.password, character = _a.character;
                return [4 /*yield*/, user_1.default.findOne({ nick: nick })];
            case 1:
                nickFound = _b.sent();
                if (nickFound)
                    throw new error_builder_1.DuplicityError("This nick name already exists");
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 2:
                emailFound = _b.sent();
                if (emailFound)
                    throw new error_builder_1.DuplicityError("This email already exists");
                return [4 /*yield*/, user_1.default.create({
                        nick: nick,
                        email: email,
                        password: password,
                        character: character,
                    })];
            case 3:
                userCreated = _b.sent();
                if (!userCreated)
                    throw new Error("There has been a problem with server, try it again later");
                res.status(201).send();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                handleError(error_1, res);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZlci1sb2dpY3MvcmVnaXN0ZXItdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlEQUEyRDtBQUMzRCxvRUFBb0U7QUFDcEUsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFFakU7Ozs7Ozs7Ozs7RUFVRTtBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUV6QyxLQUFxRCxHQUFHLENBQUMsSUFBSSxFQUEzRCxJQUFJLFVBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxTQUFTLGVBQUEsQ0FBNEI7Z0JBRWxELHFCQUFNLGNBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUE5QyxTQUFTLEdBQUcsU0FBa0M7Z0JBQ3BELElBQUksU0FBUztvQkFBRSxNQUFNLElBQUksOEJBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2dCQUV0RCxxQkFBTSxjQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBaEQsVUFBVSxHQUFHLFNBQW1DO2dCQUN0RCxJQUFJLFVBQVU7b0JBQUUsTUFBTSxJQUFJLDhCQUFjLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFFbEQscUJBQU0sY0FBVSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUMsSUFBSSxNQUFBO3dCQUNKLEtBQUssT0FBQTt3QkFDTCxRQUFRLFVBQUE7d0JBQ1IsU0FBUyxXQUFBO3FCQUNWLENBQUMsRUFBQTs7Z0JBTEksV0FBVyxHQUFHLFNBS2xCO2dCQUVGLElBQUksQ0FBQyxXQUFXO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQ2IsMERBQTBELENBQzNELENBQUM7Z0JBRUosR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztnQkFFdkIsV0FBVyxDQUFDLE9BQUssRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7S0FFM0IsQ0FBQyJ9