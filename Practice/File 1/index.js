//1

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log(countVowels("Inzamam"));  


//2:
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([5, 2, 7, 1]));  

//3:

function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("Nirob"));  



//4:
function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([20, 50, 60, 30]));  



//5:

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([4, 3], [2, 1]));  



//6: 
function hasSpace(str) {
    return str.includes(' ');
}

console.log(hasSpace("Inzamam Khan")); 



//7:
function isEmptyString(str) {
    return str === '';
}

console.log(isEmptyString(""));      
console.log(isEmptyString("Okay we are done with this work")); 




//8:

function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}


console.log(removeNegativeNumbers([-1, 4, -3, 2, 5])); 
