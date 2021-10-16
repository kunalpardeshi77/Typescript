import Department from "./department";

class ITDepartment extends Department {
    constructor( id: number, private admins: string[] = []){
        super(id, "IT");
    }

    setAdmins(admin: string){
        this.admins.push(admin);
    }

    getAdmins(){
        console.log(this.admins);
    }
}

export default ITDepartment;
