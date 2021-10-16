"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var it_department_1 = __importDefault(require("./it-department"));
var itDept = new it_department_1.default(7);
console.log("itDept =>", itDept);
itDept.addAdmins("riya");
itDept.addAdmins("kunal");
console.log("itDept =>", itDept);
