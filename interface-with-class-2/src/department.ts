interface IDepartment {
  name: string;
  id: number;
  getDetails: () => void;
}

class Department implements IDepartment {
  constructor(
    public name: string,
    public id: number,
    private employees: string[] = []
  ) {}

  addEmployees(employee: string): void {
    this.employees.push(employee);
  }

  getDetails(): void {
    console.log(this);
  }
}

export default Department;
