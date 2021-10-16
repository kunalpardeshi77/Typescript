"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var it_department_1 = __importDefault(require("./it-department"));
var itDept = new it_department_1.default(1);
console.log("itDept =>", itDept);
itDept.setAdmins("kunal");
itDept.setAdmins("riya");
console.log("itDept =>", itDept);
console.log("itDept Name", itDept.name);
