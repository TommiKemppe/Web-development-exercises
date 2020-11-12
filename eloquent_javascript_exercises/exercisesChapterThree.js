
console.log("EX1: Minimum");

function min(numberOne, numberTwo){
    return Math.min(numberOne, numberTwo);
}
console.log(min(5,9));


console.log("EX2: Recursion")

function isEven(number){
    if(number < 0){
        number *= -1;
    }
    if(number == 0){
        return true;
    }
    else if(number == 1){
        return false;
    }
    else{
        //console.log(`menossa numerossa ${number}`);
        return isEven(number -2);
    }
}
console.log(isEven(-25));


console.log("EX3: Bean Counting")

function countBs(lause){
    let total = 0;
    for (let index = 0; index < lause.length; index++){
        if(lause[index] == 'B'){
            total += 1;
        }
    }
    return total;
}

let str = "Banaani on Buiseva välibAla";
console.log("isojen B-kirjainten määrä lauseessa \"" + str + "\" on: " + countBs(str));

function countChar(lause, kirjain){
    let total = 0;
    for (let index = 0; index < lause.length; index++){
        if (lause[index] == kirjain){
            total += 1;
        }
    }
    return total;
}

console.log("pienien a-kirjainten määrä lauseessa \"" + str + "\" on: " + countChar(str, "a"));