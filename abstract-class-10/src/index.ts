import ITDepartment from "./it-department";

const itDept = new ITDepartment("IT");
itDept.addEmployee("kunal");
itDept.addEmployee("riya");

console.log("itDept => ", itDept);
console.log("Employees => ", itDept.employees);
