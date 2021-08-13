// Create 3 objects: Car, Team(sports) and animal
// All three should have a min of 4 attributes, a getter function, a setter function, and an action function.

let car = {
    model :"Tesla",
    year : 2021,
    set yr(yr) {
        this.year = yr;
    },
    version : "dual motor all-wheel drive",
    paint : "solid black",
    get paint() {
        return this.paint;
    },
    price : function(){alert("Wow, at least 100k!")},
    

};
car.paint
car.yr

let team = {
    soccer :"Manchester United F.C.",
    baseball : "New York Yankees",
    set bl(bl) {
        this.baseball = bl;
    },
    basketball : "Los Angeles Lakers",
    tennis : "Springfield Lasers",
    get tennis() {
        return this.tennis;
    },
    volleyball : function(){alert("Volleyball teams are based on country origin.")},
    

};
team.bl
team.tennis

let animal = {
    alligator :"Found in slow-moving river and lakes.",
    chicken : "Found in farms and backyards due to domesticiation.",
    set ck(ck) {
        this.chicken = ck;
    },
    duck : "Found in wetlands, marshes, ponds and rivers.",
    penguin : "Found in oceans and coasts",
    get penguin() {
        return this.penguin;
    },
    jaguar : function(){alert("ROOOAAAAAAARRRRRRRRRR!!!!!!")},
    

};
animal.ck
animal.penguin