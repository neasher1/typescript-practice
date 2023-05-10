type personType = {
    name: string,
    age: number,
    address: string
}

type newType = "name" | "age" | "address"; // manually korsi
const a: newType = 'address';

type newTypeUsingKeyOf = keyof personType;
const b: newTypeUsingKeyOf = 'address';


function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const r = getProperty({ name: "Neasher", age: 10 }, "age");