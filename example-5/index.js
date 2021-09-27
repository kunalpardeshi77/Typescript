var obj = {
    name: "kunal",
    age: 30,
    //Array type inference
    hobbies: ["trading", "singing"]
};
console.log(obj);
var favActivities;
// favActivities = "singing";  -> Error
// favActivities = ["singing", 1]; -> Error
favActivities = ["singing", "trading"];
console.log(favActivities);
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //you are able to access string method, as hobby is a string by type inference.
    console.log(hobby.toUpperCase());
}
