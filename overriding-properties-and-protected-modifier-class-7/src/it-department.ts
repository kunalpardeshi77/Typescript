import Department from "./department";

class ITDepartment extends Department {
    constructor(id:number){
        super(id);
    }

    addAdmins(admin: string){
        if(admin === "riya"){
            return;
        }
        super.addAdmins(admin);
    }
}

export default ITDepartment;