const show = (arr: string[]): object => {
    return {}
}

const show2 = (a: number, b: string): void => {

}

const show3 = (a: number, b: string): number | string => {
    return 'tsc'
}

// const user = {name: 'Max', age: 18};
// const user:{name:string, age:number} = {name: 'Max', age: 18}
const showUser = (user: { name: string, age: number }): void => {
    console.log(user.age);
}

// interface IUser {
//     id: number,
//     name: string,
//     age: number,
//     address?: {
//         street: string,
//         house: number
//     }
// }

type UniqId = number

interface IUser<T> {
    id: UniqId,
    name: string,
    age: number,
    address?: IAddress,
    arr: T[]
}

interface IAddress {
    street: string,
    house: number
}

const user: IUser<boolean> = {id: 1, name: 'Max', age: 18, arr: [true, false]}
const user2: Partial<IUser<number>> = {name: 'Ira', arr: [1, 2, 3]}
const user5: Required<IUser<boolean>> = {
    id:3,
    name: 'Yulia',
    age:25,
    arr:[true],
    address: {
        street: 'kht',
        house: 45
    }
}
type Name = 'Max'|'Kira'|'Olha'
interface IUser2 {
    name: Name
}
const user6:IUser2 = {
    name: 'Max'
}
interface IUser3 extends IUser2{
    age: number
}
const user7: IUser3 = {
    name: "Max", age:5
}

//

type StateType = [string, (a: number, b: number) => number]

const useState: StateType = ['string', (a, b) => {
    return a + b
}]

let [first, second] = useState;
console.log(first);
console.log(second(6, 4))

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
    constructor(private id: number, public name: string, private readonly age: number, protected status: boolean) {
    }

    setId(newId: number): void {
        this.id = newId
    }

    getId(): number {
        return this.id
    }
}

let user4 = new User(4, 'Olya', 23, true);
user4.setId(6)
user4.getId()
user4.name = 'Oksana'

//

interface IShapeActions {
    area: () => number,
    perimeter: () => number
}

interface ILog {
    write: () => void
}

class Triangle implements IShapeActions, ILog {
    constructor(private a: number, private b: number, private c: number) {
    }

    write(): void {
         console.log(this.a)
    }

    area(): number {
        return this.a * this.b * this.c
    }

    perimeter(): number {
        return this.a + this.b + this.c
    }

}

const shapes: IShapeActions = new Triangle(3, 5, 8)
console.log(shapes.area());
console.log(shapes.perimeter());

//

