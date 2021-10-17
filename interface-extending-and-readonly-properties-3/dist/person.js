"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, " + this.name + ", Welcome!!!");
    };
    return Person;
}());
exports.default = Person;
