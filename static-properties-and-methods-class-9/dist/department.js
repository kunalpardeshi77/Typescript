"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.addEmployees = function (emp) {
        Department._employees.push(emp); // To access static member inside non static, you have to use className
    };
    Object.defineProperty(Department.prototype, "employees", {
        /*
         static addEmployees(emp: string) {
            this._employees.push(emp); // To access static member inside non static, you have to use className
         }
        */
        get: function () {
            return Department._employees;
        },
        enumerable: false,
        configurable: true
    });
    Department._employees = [];
    return Department;
}());
exports.default = Department;
