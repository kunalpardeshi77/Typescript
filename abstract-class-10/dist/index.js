"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var it_department_1 = __importDefault(require("./it-department"));
var itDept = new it_department_1.default("IT");
itDept.addEmployee("kunal");
itDept.addEmployee("riya");
console.log("itDept => ", itDept);
console.log("Employees => ", itDept.employees);
