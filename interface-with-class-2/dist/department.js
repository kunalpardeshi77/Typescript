"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(name, id, employees) {
        if (employees === void 0) { employees = []; }
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.getDetails = function () {
        console.log(this);
    };
    return Department;
}());
exports.default = Department;
