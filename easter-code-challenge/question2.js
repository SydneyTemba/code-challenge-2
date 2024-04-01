//function that accepts two numbers as input and generates an array of the numbers that are in between them
function twoNumbers(Num1, Num2) {
    const array = [];
    for(i = Num1; i <= Num2; i++) {
       array.push(i);
    }
    return array;
}
console.log(twoNumbers(-4,7))//Function invoked and it generates an array of size 12 of the numbers in between -4 and 7.