"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsError = exports.ValueError = exports.VoidError = exports.DuplicityError = exports.UnexistenceError = void 0;
var UnexistenceError = /** @class */ (function (_super) {
    __extends(UnexistenceError, _super);
    function UnexistenceError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "UnexistenceError";
        return _this;
    }
    return UnexistenceError;
}(Error));
exports.UnexistenceError = UnexistenceError;
var DuplicityError = /** @class */ (function (_super) {
    __extends(DuplicityError, _super);
    function DuplicityError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "DuplicityError";
        return _this;
    }
    return DuplicityError;
}(Error));
exports.DuplicityError = DuplicityError;
var VoidError = /** @class */ (function (_super) {
    __extends(VoidError, _super);
    function VoidError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "VoidError";
        return _this;
    }
    return VoidError;
}(Error));
exports.VoidError = VoidError;
var ValueError = /** @class */ (function (_super) {
    __extends(ValueError, _super);
    function ValueError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValueError";
        return _this;
    }
    return ValueError;
}(Error));
exports.ValueError = ValueError;
var CredentialsError = /** @class */ (function (_super) {
    __extends(CredentialsError, _super);
    function CredentialsError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "CredentialsError";
        return _this;
    }
    return CredentialsError;
}(Error));
exports.CredentialsError = CredentialsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImVzc2VudGlhbHMvZXJyb3JzL2Vycm9yLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXNDLG9DQUFLO0lBQ3pDLDBCQUFZLE9BQVk7UUFBeEIsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FFZjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7O0lBQ2pDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxLQUFLLEdBSzFDO0FBTFksNENBQWdCO0FBTTdCO0lBQW9DLGtDQUFLO0lBQ3ZDLHdCQUFZLE9BQVk7UUFBeEIsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FFZjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7O0lBQy9CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxLQUFLLEdBS3hDO0FBTFksd0NBQWM7QUFNM0I7SUFBK0IsNkJBQUs7SUFDbEMsbUJBQVksT0FBWTtRQUF4QixZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUVmO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7O0lBQzFCLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFMRCxDQUErQixLQUFLLEdBS25DO0FBTFksOEJBQVM7QUFNdEI7SUFBZ0MsOEJBQUs7SUFDbkMsb0JBQVksT0FBWTtRQUF4QixZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUVmO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7O0lBQzNCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFMRCxDQUFnQyxLQUFLLEdBS3BDO0FBTFksZ0NBQVU7QUFNdkI7SUFBc0Msb0NBQUs7SUFDekMsMEJBQVksT0FBWTtRQUF4QixZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUVmO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQzs7SUFDakMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLEtBQUssR0FLMUM7QUFMWSw0Q0FBZ0IifQ==