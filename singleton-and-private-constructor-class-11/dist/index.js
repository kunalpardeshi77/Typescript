"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var department_1 = __importDefault(require("./department"));
var dept = department_1.default.getInstance();
var dept2 = department_1.default.getInstance();
console.log("dept => ", dept);
console.log("dept & dept2 isEqual => ", dept === dept2);
