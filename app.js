function Dinosaurs (reino, superorden) {
        this.reino = 'Animalia';
        this.superorden = 'Dinosauria'
}

Dinosaurs.prototype.getTaxonomia = function() {
    console.log(`Reino: ${this.reino}, Superorden: ${this.superorden}`)
}

Dinosaurs.prototype.run = function() {
    console.log(`My name is ${this.name}. I can run.`);
}


function Carnivore(reino,superorden, isMeatEating) {
    Dinosaurs.call(this, reino, superorden);
    this.isMeatEating = isMeatEating;
}

Carnivore.prototype = Object.create(Dinosaurs.prototype);

Carnivore.prototype.eatMeat = function() {
    if (this.isMeatEating) {
        console.log('Eat meat');
    } else {
        console.log('Don`t eat meat');
    }
}

function Herbivorous(reino,superorden, isMeatHerbs) {    
    Dinosaurs.call(this, reino, superorden);
    this.isMeatHerbs = isMeatHerbs;
}

Herbivorous.prototype = Object.create(Dinosaurs.prototype);

Herbivorous.prototype.eatHerbs = function() {
    if (this.isMeatHerbs) {
        console.log('Eat herbs')
    } else {
        console.log('Don`t eat herbs')
    }
}

function Triceraptor(name, color, timeExistence, horns, isMeatHerbs) {
    Herbivorous.call(this, isMeatHerbs);
    this.isMeatHerbs = isMeatHerbs;
    this.name = name;
    this.color = color;
    this.timeExistence = timeExistence;
    this.horns = horns;
}

Triceraptor.prototype = Object.create(Herbivorous.prototype);

Triceraptor.prototype.view = function () {
    console.log(`${this.name} has ${this.horns}. Color - ${this.color}`);
}
Triceraptor.prototype.getTimeExistence = function () {
    this.timeExistence;
}

function Tirannosaurus(name, color, timeExistence, tail, isMeatEating) {
    Carnivore.call(this, isMeatEating);
    this.isMeatEating = isMeatEating;
    this.name = name;
    this.color = color;
    this.timeExistence = timeExistence;
    this.tail = tail;
}

Tirannosaurus.prototype = Object.create(Carnivore.prototype);

Tirannosaurus.prototype.view = function(){
    console.log(`${this.name} has ${this.tail}. Color - ${this.color}`);
}
Tirannosaurus.prototype.getTimeExistence = function(){
    this.timeExistence;
}

function Pterodactyl(name, color, timeExistence, wings, isMeatEating) {
    Carnivore.call(this, isMeatEating);
    this.isMeatEating = isMeatEating;
    this.name = name;
    this.color = color;
    this.timeExistence = timeExistence;
    this.wings = wings;
}

Pterodactyl.prototype = Object.create(Carnivore.prototype);

Pterodactyl.prototype.run = function() {
    console.log(`i can\`t run`);
}
Pterodactyl.prototype.fly = function() {
    console.log(`My name is ${this.name}. I can fly.`);
}
Pterodactyl.prototype.view = function() {
    console.log(`${this.name} has ${this.wings}. Color - ${this.color}`);
}
Pterodactyl.prototype.getTimeExistence = function() {
    this.timeExistence;
}

function Diplodocus(name, color, timeExistence, legs, isMeatHerbs) {
    Herbivorous.call(this, isMeatHerbs);
    this.isMeatHerbs = isMeatHerbs;
    this.name = name;
    this.color = color;
    this.timeExistence = timeExistence;
    this.legs = legs;
}

Diplodocus.prototype = Object.create(Herbivorous.prototype);

Diplodocus.prototype.view = function() {
    console.log(`${this.name} has ${legs}. Color - ${this.color}`);
}
Diplodocus.prototype.getTimeExistence = function() {
    this.timeExistence;
}

const redTriceraptor = new Triceraptor('Shon', 'red', 'Late Cretaceous', 'three horns', true);
const redTriceraptor2 = new Triceraptor('Shon', 'red', 'Late Cretaceous', 'three horns', true);

const blueTirannosaurus = new Tirannosaurus('Rex', 'blue', 'Late Cretaceous', 'tail', true);
const yellowPterodactyl = new Pterodactyl('Sara', 'yelllow', 'Early Tithonian', 'two wings', true);
const whiteDiplodocus = new Diplodocus('Andy', 'white', 'Late Jurassic', 'long legs', true);

yellowPterodactyl.eatMeat();
whiteDiplodocus.eatHerbs();
whiteDiplodocus.getTaxonomia();
whiteDiplodocus.run();
yellowPterodactyl.run();

