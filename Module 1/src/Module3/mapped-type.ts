const arrayOfNumber = [1, 2, 3, 4, 5];
const res = arrayOfNumber.map(number => number.toString());
console.log(res);

type AreaNumber = {
    height: number,
    weight: number
}

type A = AreaNumber['height'];
type B = keyof AreaNumber;

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
    const item = arr[index];
    return item[key];
}

const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
console.log(getArrayItem(users, 0, 'name'))
  
  