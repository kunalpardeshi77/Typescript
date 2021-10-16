"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department() {
    }
    Object.defineProperty(Department.prototype, "employees", {
        get: function () {
            return this._employees;
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
exports.default = Department;
