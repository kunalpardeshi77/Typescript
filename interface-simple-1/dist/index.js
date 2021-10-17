"use strict";
var person = {
    name: "kunal",
    age: 30,
    greet: function (phrase) {
        console.log(this.name + " " + phrase + " and, welcome!");
    },
};
console.log(person.greet("Good Morning"));
