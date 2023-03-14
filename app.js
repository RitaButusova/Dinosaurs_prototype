class Dinosaurs {
    constructor(reino, superorden) {
        this.reino = 'Animalia';
        this.superorden = 'Dinosauria'
    }

    getTaxonomia() {
        console.log(`Reino: ${this.reino}, Superorden: ${this.superorden}`)
    }
    run = () => console.log(`My name is ${this.name}. I can run.`);
}


class Carnivore extends Dinosaurs{
    constructor(isMeatEating) {
        super();
        this.isMeatEating = isMeatEating
    }

    eatMeat() {
        if (this.isMeatEating) {
            console.log('Eat meat')
        } else {
            console.log('Don`t eat meat')
        }
    }
}

class Herbivorous extends Dinosaurs{
    constructor(isMeatHerbs) {
        super();
        this.isMeatHerbs = isMeatHerbs
    }

    eatHerbs() {
        if (this.isMeatHerbs) {
            console.log('Eat herbs')
        } else {
            console.log('Don`t eat herbs')
        }
    }
}


class Triceraptor extends Herbivorous {
    #number;
    constructor(name, color, timeExistence, horns, isMeatHerbs) {
        super(isMeatHerbs)
        this.name = name;
        this.color = color;
        this.timeExistence = timeExistence;
        this.horns = horns;
        this.#number = 1;
    }

    view = () => console.log(`${this.name} has ${this.horns}. Color - ${this.color}`);
    getTimeExistence = () => this.timeExistence;
    getNumber = () => {
        this.#number = this.#number + 1;
        return this.#number;
    }}

class Tirannosaurus extends Carnivore {
    #number;
    constructor(name, color, timeExistence, tail, isMeatEating) {
        super(isMeatEating)
        this.name = name;
        this.color = color;
        this.timeExistence = timeExistence;
        this.tail = tail;
        this.#number = 1;
    }

    view = () => console.log(`${this.name} has ${this.tail}. Color - ${this.color}`);
    getTimeExistence = () => this.timeExistence;
    getNumber = () => {
        this.#number = this.#number + 1;
        return this.#number;
    }
}

class Pterodactyl extends Carnivore {
    #number;
    constructor(name, color, timeExistence, wings, isMeatEating) {
        super(isMeatEating)
        this.name = name;
        this.color = color;
        this.timeExistence = timeExistence;
        this.wings = wings;
        this.#number = 1;
    }

    run = () => console.log(`i can\`t run`);
    fly = () => console.log(`My name is ${this.name}. I can fly.`);
    view = () => console.log(`${this.name} has ${this.wings}. Color - ${this.color}`);
    getTimeExistence = () => this.timeExistence;
    getNumber = () => {
        this.#number = this.#number + 1;
        return this.#number;
    }}

class Diplodocus extends Herbivorous{
    #number;
    constructor(name, color, timeExistence, legs, isMeatHerbs) {
        super(isMeatHerbs)
        this.name = name;
        this.color = color;
        this.timeExistence = timeExistence;
        this.legs = legs;
        this.#number = 1;
    }

    view = () => console.log(`${this.name} has ${legs}. Color - ${this.color}`);
    getTimeExistence = () => this.timeExistence;
    getNumber = () => {
        this.#number = this.#number + 1;
        return this.#number;
    }}

const redTriceraptor = new Triceraptor('Shon', 'red', 'Late Cretaceous', 'three horns', true);
const redTriceraptor2 = new Triceraptor('Shon', 'red', 'Late Cretaceous', 'three horns', true);
console.log(redTriceraptor2.getNumber())

const blueTirannosaurus = new Tirannosaurus('Rex', 'blue', 'Late Cretaceous', 'tail', true);
const yellowPterodactyl = new Pterodactyl('Sara', 'yelllow', 'Early Tithonian', 'two wings', true);
const whiteDiplodocus = new Diplodocus('Andy', 'white', 'Late Jurassic', 'long legs', true);

yellowPterodactyl.eatMeat();
whiteDiplodocus.eatHerbs();
whiteDiplodocus.getTaxonomia();
whiteDiplodocus.run();
yellowPterodactyl.run();

