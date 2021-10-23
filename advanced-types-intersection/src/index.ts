type name = {
  fname: string;
  lname: string;
};

type details = {
  age: number;
  sex: string;
};

// Intersection type for custom type object.
// In case of object intersection, you have to declare all the keys present in all the types.
let employee: name & details;

employee = {
  fname: "kunal",
  lname: "pardeshi",
  age: 30,
  sex: "male",
};
//===========================================================================================================
//Above code can be achieved via nterfaces as well.
interface Iname {
  fname: string;
  lname: string;
}

interface Idetails {
  age: number;
  sex: string;
}

interface Iemployee extends Iname, Idetails {}

const employee1: Iemployee = {
  fname: "kunal",
  lname: "pardeshi",
  age: 25,
  sex: "male",
};
//============================================================================================================
// Intersection type for union type.
// In case of union type, only common types need to be declared

type nameUnion = string | number;
type detailsUnion = number | boolean;

let employee2: nameUnion & detailsUnion; // only common types need to be initialized in employee1.

employee2 = 10;
