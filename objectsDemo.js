//Objects demo

/**
 * This is how things inherit in javascript
 *
**/

//make a Villain constructor
function Villain(damage, health){
    //set villain damage equal to parameter
    this.damage = damage;

    //set villain health equal to parameter
    this.health = health;
}

//make a Skeleton (a villain)
function Skeleton(numberOfBones){
    //all skeletons have 5 damage and 7 health

    //note: static values (constants) like the ones below
    //are used to set properties similar for all objects of a certain type
    this.damage = 5;
    this.health = 7;

    //set number of bones equal to passed parameter

    //note: when setting properties using a parameter, this usually means
    //that these objects can (or will) have different values for this attribute
    this.numberOfBones = numberOfBones;
}

//set prototype (parent)
Skeleton.prototype = new Villain();


//make a Zombie (a villain)
function Zombie(hungerLevel){
    //all zombies have 2 damage and 20 health
    this.damage = 2;
    this.health = 20;

    //set hunger level equal to passed parameter
    this.hungerLevel = hungerLevel;
}

Zombie.prototype = new Villain();

//make a Bat (a villain)
function Bat(screechVolume, health){
    this.screechVolume = screechVolume;
    this.health = health;

    //this property can still be set via a parameter
    this.damage = 4;
}
Bat.prototype = new Villain();

