"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department() {
        this._name = '';
    }
    Object.defineProperty(Department.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
exports.default = Department;
