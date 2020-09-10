"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var user_1 = __importDefault(require("./../schemas/user"));
var jwtPromised = require("../essentials/jwt-promised");
var SECRET = process.env.SECRET;
// const bcryptjs = require("bcryptjs");
var bcrypt = require("bcrypt");
var _a = require("../essentials/errors/error-builder"), UnexistenceError = _a.UnexistenceError, CredentialsError = _a.CredentialsError;
/**
Recieves an email and a password, it the creadentials are correct, a new jwt token will be sent.

@param {string} email The email (already registered).
@param {string} password The password (already registered).

@throws {UnexistenceError} If the email doesn't exist.
@throws {CredentialsError} If the password is not correct.
*/
module.exports = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var userFound, match, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                userFound = _a.sent();
                if (!!userFound) return [3 /*break*/, 2];
                throw new UnexistenceError("Email not found");
            case 2:
                console.log(password);
                console.log(userFound.password);
                return [4 /*yield*/, bcrypt.compare(password, userFound.password)];
            case 3:
                match = _a.sent();
                // const match = await bcryptjs.compare(password, userFound.password);
                console.log(match);
                if (!match)
                    throw new CredentialsError("Incorrect Password");
                return [4 /*yield*/, jwtPromised.sign({ sub: userFound.id }, SECRET, {
                        expiresIn: "1d",
                    })];
            case 4:
                token = _a.sent();
                return [2 /*return*/, token];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLXVzZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2ZXItbG9naWNzL2F1dGhlbnRpY2F0ZS11c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsMkRBQTJDO0FBQzNDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWpELElBQUEsTUFBTSxHQUNYLE9BQU8sV0FESSxDQUNIO0FBQ1osd0NBQXdDO0FBQ3hDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUzQixJQUFBLEtBR0YsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLEVBRi9DLGdCQUFnQixzQkFBQSxFQUNoQixnQkFBZ0Isc0JBQytCLENBQUM7QUFFbEQ7Ozs7Ozs7O0VBUUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQU8sS0FBYSxFQUFFLFFBQWdCOzs7O29CQUM5QixxQkFBTSxjQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBcEQsU0FBUyxHQUFRLFNBQW1DO3FCQUN0RCxDQUFDLFNBQVMsRUFBVix3QkFBVTtnQkFBRSxNQUFNLElBQUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7Z0JBRTVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQixxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUExRCxLQUFLLEdBQUcsU0FBa0Q7Z0JBQ2hFLHNFQUFzRTtnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUs7b0JBQUUsTUFBTSxJQUFJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3ZDLHFCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQzFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFDckIsTUFBTSxFQUNOO3dCQUNFLFNBQVMsRUFBRSxJQUFJO3FCQUNoQixDQUNGLEVBQUE7O2dCQU5LLEtBQUssR0FBVyxTQU1yQjtnQkFDRCxzQkFBTyxLQUFLLEVBQUM7OztLQUVoQixDQUFDIn0=