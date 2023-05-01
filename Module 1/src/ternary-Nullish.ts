const age:number = 20;

const isAdult = age>=15 ? "Adult" : "Not Adult";
console.log(isAdult);


//Nullish Coeslancing Operator
// using just for null and undefinded

const isAuthenticated = "";
const userName = isAuthenticated ?? "Gust";
const userName1 = isAuthenticated ? "Yes" : "no";

console.log({userName}, {userName1});

type Manush = {
    name: string;
    age: number;
    address:{
        home?:"",
        road: "No Road"
    }
}

const manush1:Manush = {
    name:"Kuddus",
    age:22,
    address:{
        road:"No Road"
    }
}

const home = manush1?.address?.home ?? "No Home";
console.log({home});