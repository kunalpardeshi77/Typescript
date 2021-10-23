// ! means it will not yield null.

// const input = <HTMLInputElement>document.getElementById("inputEl")!;
const input = document.getElementById("inputEl")! as HTMLInputElement;
console.log(input.value);

// OR

const input1 = document.getElementById("inputEl");
if (input1) {
  console.log((input1 as HTMLInputElement).value);
}
