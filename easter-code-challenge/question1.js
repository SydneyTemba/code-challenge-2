//function that accepts a string as input and swaps the case of each character in the string 
function swapCase(inputString) {
    return inputString.split('').map(inputString => {
        if (inputString === inputString.toUpperCase()) {
            return inputString.toLowerCase();
        } else {
            return inputString.toUpperCase();
        }
    }).join('');
}
console.log(swapCase('The Quick Brown Fox'))//the function successfully swaps the case of each character in the string
    