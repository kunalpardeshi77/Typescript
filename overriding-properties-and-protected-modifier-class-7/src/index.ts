import ITDepartment from "./it-department";

const itDept = new ITDepartment(7);
console.log("itDept =>", itDept);

itDept.addAdmins("riya");
itDept.addAdmins("kunal");
console.log("itDept =>", itDept);

