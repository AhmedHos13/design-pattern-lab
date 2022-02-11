class RoleOne {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'Manager';
    }
}
class RoleTwo {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'General-Manager';
    }
}
class RoleThree {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'Employee';
    }
}

const CheckRoles = [
    new RoleOne('Ahmed', 22, "male"),
    new RoleTwo('adel', 33, "male"),
    new RoleThree('nada', 23, "female")
]

CheckRoles.forEach(role => {
    if (role.GetUserRole() == 'Manager') {
        console.log(role, true);
    }
})
