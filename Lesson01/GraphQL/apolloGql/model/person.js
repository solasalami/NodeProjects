class Person {
    constructor(_id, name, email, password, status) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
    }
}

module.exports = Person;