"use strict";
// ! means it will not yield null.
// const input = <HTMLInputElement>document.getElementById("inputEl")!;
var input = document.getElementById("inputEl");
console.log(input.value);
// OR
var input1 = document.getElementById("inputEl");
if (input1) {
    console.log(input1.value);
}
