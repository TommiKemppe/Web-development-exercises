console.log("EX1: The Sum of a Range");

function range(start, end, step){
  let rangeArray = [];
  if (step == undefined){
    step = 1;
  }
  if(step > 0){
    for (let i = start; i <= end; i += step){
      rangeArray.push(i);
    }
  }
  else if(step < 0){
    for (let i = start; i >= end; i += step){
      rangeArray.push(i);
    }
  }
  else{
    return -1;
  }
  return rangeArray;
}
console.log(range(9, 2, -1));

function sum(numbers){
  let sum = 0;
  for(let number of numbers){
    sum +=number;
  }
  return sum;
}
console.log(sum(range(9, 2, -1)));


console.log("EX2: Reversing an Array");

function reverseArray(array){
  let reversedArray = [];
  for(let value of array){
    reversedArray.unshift(value);
  }
  return reversedArray;
}
console.log(reverseArray([5,4,3]));

function reverseArrayInPlace(array){
  let reversedArray = [];
  for(let i = 0; i < Math.floor(array.length / 2); i++){
    let oldValue = array[i];
    array[i] = array[array.length -1 -i];
    array[array.length -1 -i] = oldValue;
  }
  return array
}
let arrayTest = [3, 2, 1];
reverseArrayInPlace(arrayTest);
console.log(arrayTest);


console.log("EX3: A List");

function arrayToList(array){
  let list = null;
  for (let i = array.length -1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}
let listFromArray = arrayToList([1, 2, 3]);
console.log(listFromArray);

function listToArray(list)
{
  let array = [];
  for (let node = list; node != null; node = node.rest){
    array.push(node.value);
  }
  return array;
}
let arrayFromList = listToArray(listFromArray);
console.log(arrayFromList);

function prepend(element, list){
  list = {value: element, rest: list};
  return list;
}
console.log(prepend(6, listFromArray));

function nth(position, list){
  for (let i = 0; i < position; i++){
    list = list.rest;
  }
  return list.value;
}
console.log(nth(1, listFromArray));


console.log("EX4: Deep Comparison");

function deepEqual(valueOne, valueTwo){
  if (valueOne === valueTwo){
    return true;
  }
  if(valueOne == null || typeof valueOne != "object" || valueTwo == null || typeof valueTwo != "object"){
    console.log("ei olio");
    console.log(typeof valueOne);
    console.log(typeof valueTwo);
    return false;
  }
  let valueOneKeys = Object.keys(valueOne), valueTwoKeys = Object.keys(valueTwo);
  if(valueOneKeys.length != valueTwoKeys.length){
    console.log("mitta eri");
    return false;
  }
  for (let key of valueOneKeys){
    if(!valueTwoKeys.includes(key) || !deepEqual(valueOne[key], valueTwo[key])){
      return false;
    }
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "aN"}, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, kolmas: 3}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));