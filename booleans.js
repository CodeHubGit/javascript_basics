//BOOLEAN PRACTICE

var myBool = true;

//we can do 'boolean algebra' and do operations with booleans

var myBooleanAlegbra = true && false;

//what value is this?

console.log(myBooleanAlegbra);

//we can also do an 'OR

var myBooleanOr = true || false;
console.log(myBooleanOr);

//we can also chain long amounts of boolean commands

var trueBool = true;
var falseBool = false;

var myBooleanChain = ( (true || false) && (true && true) ) && (trueBool || falseBool);
//can you guess the result of myBooleanChain without printing it out to the console?

console.log(myBooleanChain);

//we can compare if two booleans equal each other, and that will evaluate to a boolean as well
var resultBool = trueBool === falseBool;
console.log(resultBool);

//in programming, = means 'assignment' and === means 'do these two things have the same value'
//we can also check if two strings, or two numbers have the same value

var numberCheckBool = 20 === 20;
console.log(numberCheckBool);

var stringCheckBool = "some string" === "some not equivalent string";
console.log(stringCheckBool);


