//Inlining demo


/**
 * the easy way (aka the wrong way)
 *
 * log a string literal
 */
console.log("This is not the way to go, you should pull this out into a variable");


/**
 * the better way (not the best)
 *
 * statically log a variable (string literal) to the console
 */

//declare a variable to hold your string to log
//good because you can reuse this

//for example
//if you translate your program, you can easily externalize your strings
var stringToLog = "You need to log this message into the console.";
console.log(stringToLog);


/**
 * super reusable way (the best way)
 *
 * log a parameter using a function
 */

//this is good, because you can make a logThis function that could
//output this stuff to the console, and later you could also have the
//log write to a file, and all you would have to do is change one function

//function to log things
var logThis = function(messageToLog){
    //console.log() parameter
    //could easily be modified to do more

    //possibly change this to log to the console
    //AND do a browser alert to let the user know what's wrong

    console.log(messageToLog);
};

//demo of aforementioned function
var stupidUserErrorMsg = 'You dumb user, that field can only hold an integer';
logThis(stupidUserErrorMsg);