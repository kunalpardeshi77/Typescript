abstract class Department {
  abstract name: string;
  abstract _employees: string[];
  abstract addEmployee(employee: string): void;

  get employees(): string[] {
    return this._employees;
  }
}

export default Department;
