"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    function Department(id, admins) {
        if (admins === void 0) { admins = []; }
        this.id = id;
        this.admins = admins;
    }
    Department.prototype.addAdmins = function (admin) {
        this.admins.push(admin);
    };
    return Department;
}());
exports.default = Department;
