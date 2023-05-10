interface CrushInterface<T, U> {
    name: string,
    husband: T,
    wife?: U,
}

// const crush6: CrushInterface<object, object> = {
//     name: "Sai Palabi",
//     husband: {
//         name: "Neaser",
//         age: 23
//     },
//     wife: {
//         name: "Sai Pallabi",
//         age: 22
//     }
// }

// const crush7: CrushInterface<
// {
//     name: string,
//     age: number
// },
// {
//     name: string,
//     age: number
// }
// > = {
//     name: "Sai Palabi",
//     husband: {
//         name: "Neaser",
//         age: 23
//     },
//     wife: {
//         name: "Sai Pallabi",
//         age: 22
//     }
// }

interface PersonalInfo {
    name: string,
    age: number
}

const crush6: CrushInterface<PersonalInfo, PersonalInfo> = {
    name: "Sai Palabi",
    husband: {
        name: "Neaser",
        age: 23
    },
    wife: {
        name: "Sai Pallabi",
        age: 22
    }
}



const crush3: CrushInterface<boolean, string> = { name: "Sai Pallabi", husband: true, wife: "Sai" };
const crush4: CrushInterface<string, null> = {
    name: "Sai Pallabi",
    husband: "Neasher"
}

interface husbandInterface {
    name: string,
    salary: number
}
const crush5: CrushInterface<husbandInterface, undefined> = {
    name: "Sai Pallabi",
    husband: {
        name: "Neasher",
        salary: 2000
    }
}


