class Department {
    name: string;
    private employees: string[] = []; // Private field, can be changed only from inside the class.

    constructor(name: string){
        this.name = name;
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees);
    }
}

export default Department;