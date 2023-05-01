const searchName = (value:string | null) =>{
    if(value==null){
        console.log("There is nothing to search");
    }
    else{
        console.log("Searching....");
    }
}

searchName(null);

//unknown
const getSpeed = (speed:unknown) =>{
    if(typeof speed === "number"){
        const convertedSpeed = (speed*1000)/3600;
        console.log(`Car Speed is ${convertedSpeed}`);
    }

    if(typeof speed === "string"){
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value)*1000)/3600;
        console.log(`Car Speed is ${convertedSpeed}`);
    }
}

getSpeed(10);
getSpeed("10 kmh^-1");



//never

function throwError(msg:string):never{
    throw new Error(msg);
}

throwError("Erorr Khaicho, thik koro")