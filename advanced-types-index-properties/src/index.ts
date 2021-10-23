interface IValue {
  [prop: string]: string; // index properties
  id: string;
  // id1: number;  => Not allowed, as you are using index properties for string.
}

const obj1: IValue = {
  name: "kunal",
  id: "123",
};
