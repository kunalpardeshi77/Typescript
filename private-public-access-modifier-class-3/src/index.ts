import Department from "./department";

const dept = new Department("IT");
// console.log(dept.employees); private field, can't be accessed/changed from outside of class.
dept.addEmployee("kunal");
dept.addEmployee("riya");
console.log(dept.printEmployees());
