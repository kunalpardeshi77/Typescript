import ITDepartment from "./it-department";

const itDept = new ITDepartment(1);
console.log("itDept =>", itDept);

itDept.setAdmins("kunal");
itDept.setAdmins("riya");

console.log("itDept =>", itDept);
console.log("itDept Name", itDept.name);
