//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum (){
var x = 10;
var y = 20;
var z = x + y;
console.log(z);
}
calculateSum ();


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(num){
    if (num % 4 == 0 ){
        return true;

    } else{
        return false;
    }
}
console.log(isEven(16));
console.log(isEven(17));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbers){
    if (numbers.length === 0){
        throw new Error("The array is empty");
    }
    let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
        if (numbers[i]>max){
            max = numbers[i];
        }
     }
  return max;
}
console.log(findMax([15, 13, 75, 78, 19])); //78
console.log(findMax([-10, -5, 10, 5, 2])); // 10


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str){
    let charArray = str.split('');
    let reversedArray = charArray.reverse();
    let reversedStr = reversedArray.join('');
    return reversedStr;
}
console.log(reverseString("Sojeeb")); // // "beejoS"
console.log(reverseString("RouFulAlam")); // "malAluFuoR"


// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

    function filterOddNumbers(numbers) {
            // Use the filter method to create a new array with only odd numbers
            return numbers.filter(function(num) {
                return num % 2 !== 0;
            });
        }
        // Example usage:
        console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
        console.log(filterOddNumbers([10, 15, 20, 25, 30])); // [15, 25]

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Example 1:
let array1 = [1, 2, 3, 4, 5];
console.log(sumArray(array1)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// Example 2:
let array2 = [-10, 5, 3, 7];
console.log(sumArray(array2)); // Output: 5 (-10 + 5 + 3 + 7 = 5)

// Example 3:
let array3 = [];
console.log(sumArray(array3)); // Output: 0 (sum of an empty array is 0)


// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(arr) {
    // Create a copy of the original array to avoid modifying the input array
    let sortedArray = arr.slice();
    
    // Use the sort() method to sort the array in ascending order
    sortedArray.sort(function(a, b) {
        return a - b;
    });
    
    // Return the sorted array
    return sortedArray;
}
// Example 1:
let array1 = [5, 2, 8, 1, 4];
console.log(sortArray(array1)); // Output: [1, 2, 4, 5, 8] (array sorted in ascending order)

// Example 2:
let array2 = [-10, 0, 3, -5, 7];
console.log(sortArray(array2)); // Output: [-10, -5, 0, 3, 7] (array sorted in ascending order)

// Example 3:
let array3 = [];
console.log(sortArray(array3)); // Output: [] (empty array remains unchanged)


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. 


function capitalizeFirstLetter(str) {
    // Check if the input string is empty or null
    if (!str) {
        return str;
    }
    
    // Capitalize the first letter and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example 1:
let string1 = "hello";
console.log(capitalizeFirstLetter(string1)); // Output: "Hello"

// Example 2:
let string2 = "javascript is awesome";
console.log(capitalizeFirstLetter(string2)); // Output: "Javascript is awesome"

// Example 3:
let string3 = "";
console.log(capitalizeFirstLetter(string3)); // Output: "" (empty string remains unchanged)

// Example 4:
let string4 = "123abc";
console.log(capitalizeFirstLetter(string4)); // Output: "123abc" (numbers and symbols are not affected)

// Ex-  console.log(capitalizeFirstLetter("hello"));  
// Output:  "Hello"
