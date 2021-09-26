//Core types of ts -> number, string, boolean
const printAdd = (
  n1: number,
  n2: number,
  label: string,
  showResult: boolean
) => {
  if (showResult) {
    console.log(`${label}${n1 + n2}`);
  } else {
    return n1 + n2;
  }
};

//explicitly defining type
let number1: number;
number1 = 20;

//Type inference - automatically assign the type based on the value stored.
//With const it can't be changed also.
const number2 = 10;
const label = "Result is: ";

printAdd(number1, number2, label, true);
