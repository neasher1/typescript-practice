type MandatorryType = { name: string, age: number, salary: number };

const addMeInCrush1 = <T extends MandatorryType>(myInfo: T) => {
    const crush10 = "Sai Pallabi";
    const newData = { ...myInfo, crush10 };
    return newData;
}

type myInfoType1 = {
    name: string,
    age: number,
    salary: number,
    other: boolean
}

const myInfo1: myInfoType1 = {
    name: "Neasher",
    age: 24,
    salary: 2000,
    other: true
};

const result101 = addMeInCrush<myInfoType1>(myInfo1);
result101.other;