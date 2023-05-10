type a1 = string;
type a2 = null;
type a3 = number

type d1 = a1 extends number ? number : null;
type d2 = a2 extends string ? null : a3 extends string ? number : never;


type sheikh = {
    wife1: string,
    wife2: string
}

type checkProperty<T, K> = K extends keyof sheikh ? true : false;

type checkWife1 = checkProperty<sheikh, "wife1">;

//


// type Bandhubi = "Mim" | "Farhana" | "Anika";
// type removeBandhubi<T> = T extends "Mim" ? never : T;
// type currentBandhubi = removeBandhubi<Bandhubi>;


type Bandhubi = "Mim" | "Farhana" | "Anika";
type removeBandhubi<T, K> = T extends K ? never : T;
type currentBandhubi = removeBandhubi<Bandhubi, "Anika">;