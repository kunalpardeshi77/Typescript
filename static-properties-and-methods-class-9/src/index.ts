import Department from "./department";

const dept = new Department("IT");
dept.addEmployees("riya");
dept.addEmployees("kunal");
console.log("dept employees => ", dept.employees);
