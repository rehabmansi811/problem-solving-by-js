//----------------------------------------- Exercise 1: Filtering an Array--------------------------------------------------------------------------------
  
/* let even_num = function(arr) {
    return arr.filter(num => num % 2 === 0);
}

let arrInput = prompt("please enter array numbers separated by spaces").split(" ").map(Number);
console.log(even_num(arrInput)); 
*/

//-------------------------------------------- Exercise: 2 Find the Largest Number---------------------------------------------------------------------------
/*function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    let largest = arr[0]; // Initialize the largest number with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is greater
        }
    }

    return largest;
} 
let input = prompt("Enter numbers separated by commas:"); // Take input as a string
let array = input.split(",").map(Number);
console.log(findLargestNumber(array)); */


//----------------------------------------------- Exercise: 3 Reverse a String----------------------------------------------------------------
/*function reverseString(str) {
    return str.split("").reverse().join("");
}

let input = prompt("Enter a string:");  // Take string input from the user
const reversedString = reverseString(input);
console.log(`Reversed string: ${reversedString}`); */

//----------------------------------------------- Exercise: 4 Remove Duplicates ----------------------------------------------------------------
 /*
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

 
function getArrayFromUser() {
    let input = prompt("Enter numbers separated by commas:");   
    let array = input.split(",").map(Number);   
    return array;
}

 
let userArray = getArrayFromUser();
let uniqueArray = removeDuplicates(userArray);
console.log(uniqueArray);   */
