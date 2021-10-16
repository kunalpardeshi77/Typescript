class Department {
    private _name: string = '';

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }
}

export default Department;