"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = []; // Private field, can be changed only from inside the class.
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
exports.default = Department;
