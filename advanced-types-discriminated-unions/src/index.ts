//discriminated unions can work well with object/interface types and union types.

interface Bird {
  type: "bird"; // common type property
  flyingSpeed: "fast";
}

interface Horse {
  type: "horse"; // common type property
  runningSpeed: "fast";
}

type animal = Bird | Horse;

function print(obj: animal) {
  /*
    Either you can use type guards 
    if ("flyingSpeed" in obj) {
      console.log(obj.flyingSpeed);
    }
  */
  /*   Or define a common type in respective object so you can check based on that property only.
  It will give you the autocompletion as well.
  and if you provide other value for that property, you will get an error as well. */

  switch (obj.type) {
    case "bird":
      console.log(obj.flyingSpeed);
      break;
    case "horse":
      console.log(obj.runningSpeed);
      break;
  }
}
