interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const person: Person = {
  name: "kunal",
  age: 30,
  greet: function (phrase: string): void {
    console.log(`${this.name} ${phrase} and, welcome!`);
  },
};

console.log(person.greet("Good Morning"));
