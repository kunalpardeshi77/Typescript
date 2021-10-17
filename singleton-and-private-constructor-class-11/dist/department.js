"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Department(7, "IT");
        return this.instance;
    };
    return Department;
}());
exports.default = Department;
