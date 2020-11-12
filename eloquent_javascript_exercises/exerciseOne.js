console.log("EX1: Looping a Triangle");

let hashtagString = "#";
for (let counter = 0; counter < 7; counter++){
    console.log(hashtagString);
    hashtagString += "#";
}


console.log("EX2: FizzBuzz");

for(let number = 1; number <= 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
        console.log(`FizzBuzz ${number}`)
    }
    else if(number % 3 == 0){
        console.log(`Fizz ${number}`);
    }
    else if(number % 5 == 0){
        console.log(`Buzz ${number}`);
    }
}


console.log("EX3: ChessBoard");

let size = 8;
let outputString = ""
for (let length = 0; length < size; length++){
    for(let width = 0; width < size; width++){
        if((length + width) % 2 == 0){
            outputString += " ";
        }
        else{
            outputString += "#";
        }
    }
    outputString += "\n";
}
console.log(outputString);