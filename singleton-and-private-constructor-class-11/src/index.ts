import Department from "./department";

const dept = Department.getInstance();
const dept2 = Department.getInstance();

console.log("dept => ", dept);
console.log("dept & dept2 isEqual => ", dept === dept2);
