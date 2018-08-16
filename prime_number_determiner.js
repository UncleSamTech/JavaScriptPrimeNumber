/*A Javascript functions that is used for checking whether numbers entered are prime numbers..
It returns true if they are prime numbers and false if they aren't
Written by Samuel Iwuchukwu
*/
//the function is declared and given an arguement to accept integer values
function isPrime(integer_numbers){
//The variable for holding the display message is declared and assigned values
var primeNumberMessage = 'This is a primeNumber';
var nonPrimeNumberMessage = 'This is not a prime number..It is divisible by : ';
//the looping takes place starting from two and making sure the value entered is always greater than the looping values 

for(var i = 2 ; i < integer_numbers ; i++){
//this is the check for prime numbers..since prime numbers are numbers divisible by itself and 1

if(integer_numbers % i == 0){
return nonPrimeNumberMessage + '' + i;
}
}
//this condition runs when the block of code above is not met..this means that it is a prime number
return primeNumberMessage;
}
