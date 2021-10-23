"use strict";
// Intersection type for custom type object.
// In case of object intersection, you have to declare all the keys present in all the types.
var employee;
employee = {
    fname: "kunal",
    lname: "pardeshi",
    age: 30,
    sex: "male",
};
var employee1 = {
    fname: "kunal",
    lname: "pardeshi",
    age: 25,
    sex: "male",
};
var employee2; // only common types need to be initialized in employee1.
employee2 = 10;
