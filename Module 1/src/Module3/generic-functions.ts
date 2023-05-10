//Arrow Function

// const createArray = (param: string): string[] => {
//     return [param];
// }

// const result = createArray("Neasher");

//generic function
const createArray = <T>(param: T): T[] => {
    return [param];
}

const result = createArray<string>("Neasher");
const result1 = createArray<boolean>(true);

type nameType = { name: string };
const result2 = createArray<nameType>({ name: "BD" });


const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}
const result3 = createArray1<string, string>("Neasher", "BD");
const result4 = createArray1<boolean, Array<string>>(true, ["BD"]);


//spread operator

// const crush10 = "Sai Pallabi";
// const myInfo = {
//     name: "Neasher",
//     age: 24,
//     salary: 2000
// };

// const newData = { ...myInfo, crush10 };


const addMeInCrush = <T>(myInfo: T) => {
    const crush10 = "Sai Pallabi";
    const newData = { ...myInfo, crush10 };
    return newData;
}

type myInfoType = {
    name: string,
    age: number,
    salary: number
}

const myInfo: myInfoType = {
    name: "Neasher",
    age: 24,
    salary: 2000
};

const result10 = addMeInCrush<myInfoType>(myInfo);
result10.age;