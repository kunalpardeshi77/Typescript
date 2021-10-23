"use strict";
function print(a, b) {
    if ("lname" in a) {
        console.log(a.lname);
    }
}
function print2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
//===========================================================================================================
//typeguard ussing instanceOf
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("car drive");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("truck drive");
    };
    Truck.prototype.lifting = function () {
        console.log("heavy lifting");
    };
    return Truck;
}());
function print3(obj) {
    if (obj instanceof Truck) {
        console.log(obj.lifting());
    }
    if ("lifting" in obj) {
        console.log(obj.lifting());
    }
}
