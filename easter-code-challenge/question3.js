//function that accepts a number as input, checks if the number is prime and returns the array in that order of its prime numbers
function isPrime(num) {
    if (num <= 1) {return false} 
    // 0 and 1 are not prime
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }}
            return true;
             
    }

//callback function that filters through the array returns only the prime numbers
function primeNumbersFilter (array){
    return array.filter(num => isPrime(num))
}
const numbers = [1,2,3,4,5,6,7,8,9]
console.log(primeNumbersFilter(numbers)); //the callback function filters through the array and returns only the prime numbers in the array.