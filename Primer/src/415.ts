let myArray: (number | string | boolean)[] = [100, "Adam", true];
myArray[3] = "Tuesday";
let val = myArray[3];
console.log(`Value: ${val}`);