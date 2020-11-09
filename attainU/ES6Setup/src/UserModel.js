class UserModel {
    constructor() {
        this.name = "";
    }
    getName() {
        return this.name;
    }
    setName(name){
        this.name = name;
    }
};

export default UserModel;//when we are exporting whole file as a module we write export default