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
var film_1 = __importDefault(require("../schemas/film"));
var DuplicityError = require("../essentials/errors/error-builder").DuplicityError;
/**
Recieves all the info of the film that wants to be added and creates the new film.

@param {string} req.body All the new film information.
@param {string} name The name of the new film to check if it already exist.

@throws {DuplicityError} If the name of the film already exist.
*/
module.exports = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var name, filmFound;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = body.name;
                return [4 /*yield*/, film_1.default.findOne({ name: name })];
            case 1:
                filmFound = _a.sent();
                if (filmFound)
                    throw new DuplicityError("This film already exists");
                return [4 /*yield*/, film_1.default.create(body)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWZpbG0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL2NyZWF0ZS1maWxtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW1DO0FBRTNCLElBQUEsY0FBYyxHQUFLLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxlQUFsRCxDQUFtRDtBQUV6RTs7Ozs7OztFQU9FO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFPLElBQVM7Ozs7O2dCQUN2QixJQUFJLEdBQUssSUFBSSxLQUFULENBQVU7Z0JBQ0oscUJBQU0sY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsRUFBQTs7Z0JBQXhDLFNBQVMsR0FBRyxTQUE0QjtnQkFDOUMsSUFBSSxTQUFTO29CQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDcEUscUJBQU0sY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXZCLFNBQXVCLENBQUM7Ozs7S0FDekIsQ0FBQyJ9