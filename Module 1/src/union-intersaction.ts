type NoobDev = {
    name: string;
}

// type JuniorDev = {
//     name: string;
//     expertise: string;
//     experience: number;
// }

type JuniorDev = NoobDev & {
    expertise: string;
    experience: number;
}


const newDev : NoobDev | JuniorDev = {
    name: "Moznu Mia",
    expertise: "JavaScript",
    experience: 1
}


type NextlevelDev = JuniorDev & {
    leadership: string,
    level: "junior" | "mid" | "senior"
}

const nextBhai:NextlevelDev = {
    name: "Next Bhai",
    expertise: "JS",
    experience: 12,
    leadership: "PH",
    level:"junior"
}