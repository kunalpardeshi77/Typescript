class Department {
  private static instance: Department;
  private constructor(private id: number, private name: string) {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Department(7, "IT");
    return this.instance;
  }
}

export default Department;
