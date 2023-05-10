type User = {
    name: string;
    age: number;
}

type extendedUser = User & {
    role: string;
}

interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
    role: string;
}

const userExtends: IExtendedUser = {
    name: "Omanush",
    age: 200,
    role: "Unknown"
}

const userExtendssa: extendedUser = {
    name: "Omanush",
    age: 200,
    role: "Unknown"
}


// const userWIthTypeAllias: User = {
//     name: "Type Allias",
//     age: 100
// }

// const userWIthTypeInterface: IUser = {
//     name: "Interface",
//     age: 200,
// }



//interace use just for object, functions, array
// type use just for primitive data type

type addNumberss = (num1: number, num2: number) => number;
const addNumberss = (num1: number, num2: number): number => num1 + num2;
const addNumbers = (num1: number, num2: number): number => num1 + num2;