/*
Game example using a function to do a combat loop.

*/

//declare global variables

var userHealth = 30;
var enemiesDefeated = 0;

var combatLoopFunction = function(enemyName, enemyHealth, maxEnemyDamage) {
  
  alert("You encounter a " + enemyName);
  
  while (userHealth > 0 && enemyHealth > 0) {
    //generates a random number between 1 and maxEnemyDamage
    var randomEnemyAttack = Math.floor((Math.random() * maxEnemyDamage) + 1);
    //the enemy attack first
    alert("The " + enemyName + "lunges at you! It does " + randomEnemyAttack + " damage!");
    
    userHealth = userHealth - randomEnemyAttack;
    
    //and now the user can attack
    //we create a loop to keep prompting the user for valid input
    //the use can input, 1 for a weak attack, 2 for a medium attack, 3 for a strong attack
    
    var hasGivenValidInput = false;
    
    while (!hasGivenValidInput) {
      var userInput = prompt("Enter 1 for a weak attack, 2 for a medium attack, 3 for a strong attack.");
      hasGivenValidInput = (userInput === 1) || (userInput == 2) || (userInput === 3);
    }
    
    //the amount of attack damage is 8 possible, plus the strength of the attack
    var attackDamage = Math.floor((Math.random() * 8) + userInput);
    
    var attackStrength = '';
    if (userInput === 1) {
      attackStrength = "weak";
    }
    
    if (userInput === 2) {
      attackStrength = "medium";
    }
    
    if (userInput === 3) {
      attackStrength = "strong";
    }
    
    alert("You strike at the " + enemyName + " with a " + attackStrength + " attack! You do " + attackDamage + " damage!"
          + "\n Your health: " + userHealth
          + "\n Enemy health: " + enemyHealth);
    
  }
  
  alert("The " + enemyName + " has been defeated!");
  
}

combatLoopFunction("gator", 12, 4);
