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
exports.addMember = exports.authUser = exports.getUser = exports.newUser = void 0;
var user_1 = __importDefault(require("./../user"));
var jwt = require("jsonwebtoken");
var jwtPromised = require("../essentials/jwt-promised");
var SECRET = "lescatiusquesdeligorsondemoscou";
exports.newUser = function (req, res) {
    user_1.default.create(req.body, function (error, user) {
        if (error)
            res.send(error);
        else
            res.status(201).send();
    });
};
exports.getUser = function (req, res) {
    user_1.default.find(req.body).then(function (user) {
        if (!user)
            res.status(404).send();
        else
            res.send(user);
    });
};
exports.authUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, userFound, token;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                email = (_a = req.body, _a.email), password = _a.password;
                return [4 /*yield*/, user_1.default.findOne({ email: email })];
            case 1:
                userFound = _b.sent();
                if (!!userFound) return [3 /*break*/, 2];
                throw new Error("Este email no existe");
            case 2:
                if (!(userFound.password !== password)) return [3 /*break*/, 3];
                throw new Error("Contraseña incorrecta");
            case 3: return [4 /*yield*/, jwtPromised.sign({ sub: userFound.id }, SECRET, {
                    expiresIn: "1d",
                })];
            case 4:
                token = _b.sent();
                return [4 /*yield*/, res.send(token)];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addMember = function (req, res) {
    var _a;
    var name = req.body.name;
    var token;
    var userId;
    if (req.headers.authorization)
        _a = req.headers.authorization.split(" "), token = _a[1];
    userId = jwt.verify(token, SECRET).sub;
    user_1.default.findById(userId).then(function (user) {
        if (user) {
            user.members.push(name);
        }
        else
            throw new Error("Token has expired");
        user_1.default.findByIdAndUpdate(userId, user).then(function () { return res.status(204).send(); });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBNkI7QUFDN0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzFELElBQU0sTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0FBRXRDLFFBQUEsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDL0MsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBVSxFQUFFLElBQVM7UUFDMUMsSUFBSSxLQUFLO1lBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLFFBQUEsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDL0MsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtRQUM1QixJQUFJLENBQUMsSUFBSTtZQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxRQUFBLFFBQVEsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRTVDLEtBQUssSUFBYixLQUNFLEdBQUcsS0FEb0IsV0FBWixFQUFFLFFBQVEsY0FBQSxDQUNqQjtnQkFDZSxxQkFBTSxjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBOUMsU0FBUyxHQUFRLFNBQTZCO3FCQUNoRCxDQUFDLFNBQVMsRUFBVix3QkFBVTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O3FCQUVsRCxDQUFBLFNBQVMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFBLEVBQS9CLHdCQUErQjtnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUUzQixxQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7b0JBQ2xFLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLEVBQUE7O2dCQUZJLEtBQUssR0FBRyxTQUVaO2dCQUNGLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUE7O2dCQUFyQixTQUFxQixDQUFDOzs7OztLQUczQixDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTs7SUFFdkMsSUFBQSxJQUFJLEdBQ1YsR0FBRyxVQURPLENBQ047SUFDUixJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksTUFBVyxDQUFDO0lBQ2hCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhO1FBQzNCLEtBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUE3QyxLQUFLLFFBQUEsQ0FBeUM7SUFDbkQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUV2QyxjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7UUFDbkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6Qjs7WUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDNUMsY0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9