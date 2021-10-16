class Department {
  private static _employees: string[] = [];

  constructor(public name: string) {}

  addEmployees(emp: string) {
    Department._employees.push(emp); // To access static member inside non static, you have to use className
  }

  /* 
   static addEmployees(emp: string) {
      this._employees.push(emp); // To access static member inside non static, you have to use className
   }
  */

  get employees(): string[] {
    return Department._employees;
  }
}

export default Department;
