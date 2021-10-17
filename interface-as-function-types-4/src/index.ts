/* type AddFn = (a: number, b: number) => number; */

interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (a: number, b: number) => {
  return a + b;
};
