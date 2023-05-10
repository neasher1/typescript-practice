//json place holder

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getToDo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return await response.json();
}

const getToDoData = async (): Promise<void> => {
    const result = await getToDo();
    console.log(result);
}

getToDoData();

//Mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};

const getPromiseData = async (): Promise<void> => {
    const data = await makePromise();
    console.log(data);
}


type DataType = {
    data: string
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Data is fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};

const getPromiseDataObj = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}