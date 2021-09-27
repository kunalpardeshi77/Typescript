const obj = {
  name: "kunal",
  age: 30,
  //Array type inference
  hobbies: ["trading", "singing"],
};
console.log(obj);

let favActivities: string[];
// favActivities = "singing";  -> Error
// favActivities = ["singing", 1]; -> Error
favActivities = ["singing", "trading"];
console.log(favActivities);

for (const hobby of obj.hobbies) {
  //you are able to access string method, as hobby is a string by type inference.
  console.log(hobby.toUpperCase());
}
