type GenericArray<T> = Array<T>;
const rollNumbers: GenericArray<number> = [1, 23, 4];
const rollNumbers1: GenericArray<string> = ["Neasher", "Mr X"];
const rollNumbers2: GenericArray<boolean> = [true, false];


type nameAndRoll = { name: string, roll: number };
const userRollNumbers: GenericArray<nameAndRoll> = [
    {
        name: "Mr. X",
        roll: 1
    },
    {
        name: "Mr Y",
        roll: 2
    }
]


type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Neasher", "Sai Pallabi"];

// type relationWithSalaryType = { name: string, salary: number }

interface relationWithSalaryType {
    name: string,
    salary: number
}

const relationWithSalary: GenericTuple<relationWithSalaryType, string> = [
    {
        name: "Neasher Ahmed",
        salary: 5000
    },
    "Sai Pallabi"
]