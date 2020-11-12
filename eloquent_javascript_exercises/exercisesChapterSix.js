console.log("EX1: A Vector Type");

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(summattavaVektori){
        let xSum = summattavaVektori.x + this.x;
        let ySum = summattavaVektori.y + this.y;
        let summaVektori = new Vec(xSum, ySum)
        return summaVektori;      
    }

    minus(vahennettavaVektori){
        let xDiff = this.x - vahennettavaVektori.x;
        let yDiff = this.y- vahennettavaVektori.y;
        let erotusVektori = new Vec(xDiff, yDiff);
        return erotusVektori;
    }

    get length(){
        let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return length;
    }
}

vehtori = new Vec(3, 2);
console.log(vehtori.plus(new Vec(2,1)));
console.log(vehtori.minus(new Vec(2,1)));
console.log(vehtori.length);


console.log("EX2 and EX3: Groups and Iterable Groups");

class Group{
    constructor(){
        this.contents = [];
    }

    add(value){
        if (this.contents.indexOf(value) == -1){
            this.contents.push(value);
            console.log(`arvo ${value} lisätty taulukkoon`);
        }
        else{
            console.log(`arvo ${value} on jo taulukossa`);
        }
    }

    delete(value){
        if (this.contents.indexOf(value) != -1){
            this.contents.splice(this.contents.indexOf(value), 1);
            console.log(`arvo ${value} poistettu taulukosta`);
        }
        else{
            console.log(`arvoa ${value} ei löydy taulukosta`);
        }
    }

    has(value){
        if(this.contents.indexOf(value) == -1){
            return false;
        }
        else{
            return true;
        }
    }

    static from(iterableObject){
        let group = new Group;
        for (let value of iterableObject){
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }

    next(){
        if(this.position >= this.group.contents.length){
            return {done: true};
        }
        else{
            let result = {value: this.group.contents[this.position], done: false};
            this.position++;
            return result;
        }
    }
}

let lista = new Group;
lista.add(2);
console.log(lista.contents);
lista.add("Juha");
console.log(lista.contents);
lista.add(5);
console.log(lista.contents);
lista.add(2);
console.log(lista.contents);
lista.delete(2);
console.log(lista.contents);
lista.delete(2);
console.log(lista.contents);
console.log(lista.has("Juha"));
console.log(lista.has(7));

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }


console.log("EX4: Borrowing a Method");

let map = {
    one: true,
    two: true,
    hasOwnProperty: true
}

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
console.log(Object.prototype.hasOwnProperty.call(map, "three"));