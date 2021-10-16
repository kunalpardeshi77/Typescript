class Department {
    constructor(private id: number, private admins: string[] = []){}

    protected addAdmins(admin: string){
        this.admins.push(admin);
    }
}

export default Department;