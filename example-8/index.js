var combine = function (input1, input2) {
    //Sometimes you have to put safe check, based on the logic you are writing.
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
};
var combinedAges = combine(1, 2);
console.log(combinedAges);
var combinedNames = combine("kunal", "pardeshi");
console.log(combinedNames);
