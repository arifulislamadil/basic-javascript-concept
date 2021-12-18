const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('welcome'));