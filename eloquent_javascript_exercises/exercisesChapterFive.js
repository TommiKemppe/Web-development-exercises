console.log("EX1: Flattening");

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));


console.log("EX2: Your Own Loop");

function loop(startValue, test, update, body){
    for(let value = startValue; test(value); value = update(value)){
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);


console.log("EX3: Everything");

function everyForLoop(array, test) {
    for(let i = 0; i < array.length; i++){
        if(!test(array[i])){
            return false;
        }
    }
    return true;
  }

function everySome(array, test){
    return !array.some(element => !test(element));
}
console.log(everyForLoop([1, 3, 5], n => n < 10));
console.log(everyForLoop([2, 4, 16], n => n < 10));
console.log(everyForLoop([], n => n < 10));
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));




