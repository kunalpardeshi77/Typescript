interface INamed {
  readonly name: string;
}

interface IGreet extends INamed {
  greet(): void;
}

class Person implements IGreet {
  constructor(public name: string, private age: number) {}

  greet(): void {
    console.log(`Hello, ${this.name}, Welcome!!!`);
  }
}

export default Person;
