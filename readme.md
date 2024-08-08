1. Write short notes on string methods with code examples

* toLowerCase()
* toUpperCase()
* substring()
* replace()
* trim()
* split()
* slice()

Ans.
* toLowerCase() : This method does not change the original string; it returns a new string with all characters converted to lowercase.

- Eg:
```js
let text = "Hello World!";
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);
```
* toUpperCase() : This method does not change the original string; it returns a new string with all characters converted to uppercase.

- Eg:
```js
let text = "Hello World!";
let upperCaseText = text.toUpperCase();
console.log(upperCaseText);
```
* substring() : This method in JavaScript is used to extract a portion of a string between two specified indices.

- EG:
```js
let text = "Hello, world!";
let result = text.substring(1, 5);
console.log(result):
```
* replace() : This method in JavaScript is used to search for a specified value or a regular expression in a string and replace it with a new value.

- Eg:
```js
let text = "Hello World!";
let newText = text.replace("World", "JavaScript");
console.log(newText);
```
* trim() : This method in JavaScript is used to remove whitespace from both ends of a string.

- Eg:
```js
let text = "   Hello World!   ";
let trimmedText = text.trim();
console.log(trimmedText);
```
* split() :  This method in JavaScript is used to divide a string into an array of substrings based on a specified separator.

- Eg:
```js
let text = "How are you doing today?";
let words = text.split(" ");
console.log(words);
```
* slice() : This method in JavaScript is used to create a shallow copy of a portion of an array or string without modifying the original.

- Eg:
```js 
const text = "Hello, World!";
const result = text.slice(7, 12);
console.log(result);
```

2. create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation).

Ans.
```js
let userName=prompt("Enter your name: ")
let firstLetter=userName.slice(0,1).toUpperCase()
let restOfTheName=userName.slice(1,userName.length).toLocaleLowerCase()
let finalName=firstLetter+restOfTheName
alert(`Hay ${finalName}`)
```




