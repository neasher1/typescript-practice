function add(num1:number, num2:number = 50): number{
    return num1 + num2;
}
add(1);
add(1, 100);

const addArrow = (num1:number, num2:number): number => num1 + num2;

const arr = [1,3,4];

const newArr = arr.map((elem:number) => elem*elem);

const person:{
    name: string;
    balance:number;
    addBalance(money:number):string;
} = {
    name: "neasher",
    balance: 5,
    addBalance(money:number){
        return `My Balance ${this.balance+money}`;
    }
}


//spread operator

const myFriends = ["Maruf", "hasib", "Yeasib"];
const newFriends = ["Anika", "Jhanika"];

myFriends.push(...newFriends);
// console.log(myFriends);

//rest operator

const greetFriends = (...friendsss:string[]):void => friendsss.forEach(frnd => console.log(`Hi ${frnd}`))

greetFriends("Anika", "Mithila", "Katrina", "Anushka", "Ritu");


//object destructure
const userInfo = {
    name: "Abul Bashar",
    age: 22
}

const {name: fullName} = userInfo;
console.log(fullName);