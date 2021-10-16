import Department from "./department";

const dept = new Department("IT");
dept.showDept();

const deptCopy = {showDept: dept.showDept/* , name: "new dept" */};
// deptCopy.showDept(); // It will print undefined, you have to create an object with name key inside it.
//For typescript to provide an error here, you have to specify this type in showDept method inside Department class
//i.e. 
/* 
    showDept(this: Department){
        console.log(this.name);
    } 
*/
