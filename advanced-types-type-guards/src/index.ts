// typeguard using in
type nameType = {
  fname: string;
  lname: string;
};

type detailsType = {
  age: number;
  sex: string;
};

type employee = nameType | detailsType;

function print(a: employee, b: employee) {
  if ("lname" in a) {
    console.log(a.lname);
  }
}

//============================================================================================================

// typeguard using typeof.
type data = string | number;

function print2(a: data, b: data) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//===========================================================================================================

//typeguard ussing instanceOf

class Car {
  drive() {
    console.log("car drive");
  }
}

class Truck {
  drive() {
    console.log("truck drive");
  }

  lifting() {
    console.log("heavy lifting");
  }
}

function print3(obj: Car | Truck) {
  if (obj instanceof Truck) {
    console.log(obj.lifting());
  }
  if ("lifting" in obj) {
    console.log(obj.lifting());
  }
}
