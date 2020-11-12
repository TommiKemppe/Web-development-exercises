  const roads = [
    "Alice's House-Bob's House",     "Alice's House-Cabin",
    "Alice's House-Post Office",     "Bob's House-Town Hall",
    "Daria's House-Ernie's House",   "Daria's House-Town Hall",
    "Ernie's House-Grete's House",   "Grete's House-Farm",
    "Grete's House-Shop",            "Marketplace-Farm",
    "Marketplace-Post Office",       "Marketplace-Shop",
    "Marketplace-Town Hall",         "Shop-Town Hall"
  ];

  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);


  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }

 let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
 );
 let next = first.move("Alice's House");
 
 console.log(next.place);
 // → Alice's House
 console.log(next.parcels);
 // → []
 console.log(first.place);
 // → Post Office

  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
  }

  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
 };

 //runRobot(VillageState.random(), randomRobot);



 const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
 ];

 function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
  }

  function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
      let {at, route} = work[i];
      for (let place of graph[at]) {
        if (place == to) return route.concat(place);
        if (!work.some(w => w.at == place)) {
          work.push({at: place, route: route.concat(place)});
        }
      }
    }
  }

  function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

  let turns = runRobot(VillageState.random(), goalOrientedRobot, []);
  console.log(`turns: ${turns}`);

  

  console.log("EX1: Measuring a Robot");

  function compareRobots(robotOne, robotTwo, memory){
      let stepsOne = 0;
      let stepsTwo = 0;
      for(i = 0; i < 100; i++){
          stepsOne += runRobot(VillageState.random(), robotOne, memory);
      }
      for(i = 0; i < 100; i++){
        stepsTwo += runRobot(VillageState.random(), robotTwo, memory);
      }
      let averageOne = Math.floor(stepsOne/100);
      let averageTwo = Math.floor(stepsTwo/100);
      console.log(`Robot One average turns: ${averageOne}`);
      console.log(`Robot Two average turns: ${averageTwo}`);
  }

  //compareRobots(randomRobot, goalOrientedRobot, []);

  
  console.log("EX2: Robot Efficiency");

  function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
  
      // This determines the precedence a route gets when choosing.
      // Route length counts negatively, routes that pick up a package
      // get a small bonus.
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
  
    return {direction: route[0], memory: route.slice(1)};
  }

  compareRobots(goalOrientedRobot, lazyRobot, []);


  console.log("EX3: Persistent Group");

  class PGroup{
    constructor(contents){
        this.contents = contents;
    }

    add(value){
        if (this.contents.indexOf(value) == -1){
            //this.contents.push(value);
            console.log(`arvo ${value} lisätty taulukkoon`);
            let newPGroup = new PGroup(this.contents.concat([value]));
            return newPGroup;
        }
        else{
            console.log(`arvo ${value} on jo taulukossa`);
            return this;
        }
        
    }

    delete(value){
        if (this.contents.indexOf(value) != -1){
            //this.contents.splice(this.contents.indexOf(value), 1);
            console.log(`arvo ${value} poistettu taulukosta`);
            let newPGroup = new PGroup(this.contents.filter(m => m !== value));
            return newPGroup;
        }
        else{
            console.log(`arvoa ${value} ei löydy taulukosta`);
            return this;
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

let lista = new PGroup([1, 2, "Juha", 8]);
console.log(lista.contents);
console.log(lista.add(66).contents);
console.log(lista.contents);
console.log(lista.delete(2).contents);
console.log(lista.contents);

PGroup.empty = new PGroup([]);