import Department from "./department";

class ITDepartment extends Department {
  constructor(public name: string, public _employees: string[] = []) {
    super();
  }

  addEmployee(employee: string): void {
    this._employees.push(employee);
  }
}

export default ITDepartment;
