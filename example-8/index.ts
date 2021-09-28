const combine = (input1: string | number, input2: string | number) => {
  //Sometimes you have to put safe check, based on the logic you are writing.
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
};

const combinedAges = combine(1, 2);
console.log(combinedAges);
const combinedNames = combine("kunal", "pardeshi");
console.log(combinedNames);
