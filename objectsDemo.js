//Objects demo

//villain damage health

//inheritance skeleton zombie

//prototypal

/**
 * This is how things inherit in javascript
 *
**/

//make a Villain constructor
function Villain(damage, health){
    this.damage = damage;
    this.health = health;
}

//make a Skeleton (a villain)
function Skeleton(numberOfBones){
    this.damage = 5;
    this.health = 7;

    this.numberOfBones = numberOfBones;
}

Skeleton.prototype = new Villain();


//make a Zombie (a villain)
function Zombie(hungerLevel){
    this.damage = 2;
    this.health = 20;

    this.hungerLevel = hungerLevel;
}

Zombie.prototype = new Villain();

