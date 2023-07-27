// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const calcReverseString = str => {
    if(typeof str !== "string") return;
    let reversedString = ""
    for(let i = str.length-1; i >= 0; i-- ){
        reversedString+=str[i];
    }
    console.log(reversedString)
}
// reverseString("hello world")

// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const calcPositiveNums = arr => {
    if(!Array.isArray(arr)) return;
    const newArr = [];
    for(let num of arr){
        if(num > 0) newArr.push(num)
    }
    return newArr.reduce((prev, current) => prev+current, 0);
}
// console.log(positiveNums([2, -5, 10, -3, 7]))


// Write a JavaScript program to find the most frequent element in an array and return it.
const calcFrequentElement = arr => {
    if(!Array.isArray(arr)) return;

    const elements = {};
    arr.forEach((num) => elements[num] = (elements[num] || 0) + 1);

    let mostFrequentElement;
    let maxNumber = 0;
    for(let prop in elements){
        if(elements[prop] > maxNumber) {
            maxNumber = elements[prop];
            mostFrequentElement = prop;
        }
    }

    return mostFrequentElement;
}
// console.log(calcFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5, 5]));


// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, num2, operator) => {
    if(num2 == 0) return "Error: 0 can't be appointed as 2nd number";
    if(operator === "+") return num1+num2;
    if(operator === "-") return num1-num2;
    if(operator === "*") return num1*num2;
    if(operator === "/") return num1/num2;
}
// console.log(calculator(100,10, '/'))

//  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const find2ndSmallest = (arr) => {
    if(!Array.isArray(arr)) return;
    const numberArray = [];
    arr.forEach(item => {
        if(typeof item === 'number' && !isNaN(item)) numberArray.push(parseFloat(item));
    })
    numberArray.sort((a,b) => a - b);
    console.log(numberArray)
    return numberArray[1];
}
// console.log(find2ndSmallest([3, 5, 2, 5, 3, 3, 1, 4, 5, 5]))


// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const findTwoNumbersWithSum = (arr, target) => {
    if(!Array.isArray(arr)) return;
    let numberPair = null;
    arr.forEach((num1, index1) => {
        if(!numberPair){
            arr.forEach((num2, index2) => {
                if(index1 !== index2){
                    if((num1+num2) === target) {
                        numberPair = [index1, index2];
                    }; 
                }
            })
        } else return;
    })
    return numberPair;
}
// console.log(findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9))


// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInt = (romanStr) => {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for(let i = 0; i < romanStr.length; i++){
        const currentSymbol = romanStr[i];
        const currentIntValue = romanNumerals[currentSymbol];
        const nextSymbol = romanStr[i+1];
        const nextIntValue = romanNumerals[nextSymbol];

        if(nextIntValue > currentIntValue) {
            result += (nextIntValue-currentIntValue)
            i++
        }
        else result += currentIntValue;
    }

    return result;
}
// console.log(romanToInt("XXII"))