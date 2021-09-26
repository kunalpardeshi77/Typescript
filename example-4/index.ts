// Type inferencce for object
const person = {
  name: "kunal",
  age: 20,
};

console.log(person);

// Explicitly define object type
const person1: {
  name: string;
  age: number;
} = {
  name: "kunal1",
  age: 30,
};

console.log(person1);
