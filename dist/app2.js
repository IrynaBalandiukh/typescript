const show = (arr) => {
    return {};
};
const show2 = (a, b) => {
};
const show3 = (a, b) => {
    return 'tsc';
};
// const user = {name: 'Max', age: 18};
// const user:{name:string, age:number} = {name: 'Max', age: 18}
const showUser = (user) => {
    console.log(user.age);
};
const user = { id: 1, name: 'Max', age: 18, arr: [true, false] };
const user2 = { name: 'Ira', arr: [1, 2, 3] };
const useState = ['string', (a, b) => {
        return a + b;
    }];
let [first, second] = useState;
console.log(first);
console.log(second(6, 4));
//
// class User{
//     id?:number;
//     name:string;
//     age:number
//
//     constructor(id:number, name:string, age:number) {
//         this.id=id;
//         this.name=name;
//         this.age=age;
//     }
// }
// const user3: User = {name: 'Alex', age: 24};
class User {
    constructor(id, name, age, status) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.status = status;
    }
    setId(newId) {
        this.id = newId;
    }
    getId() {
        return this.id;
    }
}
let user4 = new User(4, 'Olya', 23, true);
user4.setId(6);
user4.getId();
user4.name = 'Oksana';
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    write() {
        console.log(this.a);
    }
    area() {
        return this.a * this.b * this.c;
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
const shapes = new Triangle(3, 5, 8);
console.log(shapes.area());
console.log(shapes.perimeter());
//
//# sourceMappingURL=app2.js.map