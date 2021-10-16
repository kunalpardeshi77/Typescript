class Department {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    showDept(this: Department){
        console.log(this.name);
    }
}

export default Department;