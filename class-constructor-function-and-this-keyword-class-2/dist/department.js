"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.showDept = function () {
        console.log(this.name);
    };
    return Department;
}());
exports.default = Department;
