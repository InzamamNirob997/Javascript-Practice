
// 1. Check if a number is even
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }
  console.log(isEven(6)); 
  
  // 2. Convert Celsius to Fahrenheit
  function CelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  console.log(CelsiusToFahrenheit(2)); 
  
  // 3. Square of a Number
  function squareNumber(num) {
    return num * num;
  }
  console.log(squareNumber(5)); 
  
// 4. Add Two Numbers
function add(x, y) {
    let result = x + y;
    return result;
  }
  
  let AllResult = add(100, 200) + add(600, 500);
  console.log(AllResult); 
  
  // 5. Multiply two numbers
  function multiply(x, y) {
    if (typeof x !== "number") {
      return "1st Number is not a number";
    } else if (typeof y !== "number") {
      return "2nd Number is not a number";
    } else {
      return x * y;
    }
  }
  
  console.log(multiply(10, 30)); 
  

  //6. Get First character of a string
  function firstCharacter(str) {
    return str.charAt(1);
  }
  
  console.log(firstCharacter("Hello")); 
  
  // 7. Number is Positive or Negative using ternary operator
function checkNum(num) {
    return num >= 0 ? "Positive" : "Negative";
  }
  
  console.log(checkNum(4)); 



  // 8. Convert Minutes to Seconds
function minutesToSeconds(minute) {
    return minute * 60;
  }
  console.log(minutesToSeconds(60)); 
  
  // 9. Concatenate Two Strings
  function concatenate(x, y) {
    return x + " " + y;
  }
  console.log(concatenate("Hello", "JavaScript")); 
  
  // 10. Check if String Contains a Word
  function checkSTR(sentence, word) {
    return sentence.includes(word);
  }
  console.log(checkSTR("I love JavaScript", "JavaScripto")); // Output: false
  
  