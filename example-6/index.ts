const personEx = {
  name: "kunal",
  age: 20,
  hobbies: ["trading", "singing"],
  role: [1, "admin"],
};

console.log(personEx);
// restrictions - below things update the array.
// personEx.role.push(2);
// personEx.role[1] = 2;

const personExTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple declaration
} = {
  name: "kunal",
  age: 20,
  hobbies: ["trading", "singing"],
  role: [1, "admin"],
};

console.log(personExTuple);
personExTuple.role.push(3); // push still works, typescript won't able to stop this.
// personExTuple.role[1] = 2; // Error
// personExTuple.role = [1, "admin", 2]; // Error
