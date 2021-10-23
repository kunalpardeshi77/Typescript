"use strict";
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var res = add("kunal", " pardeshi");
// res.split(" ");
// This line should work, but typescript won't understand the return type in above case,
//Hence we need to provide function overloads.
res.split(" "); // Now with function overloads this line works.
