let userName=prompt("Enter your name: ")
let firstLetter=userName.slice(0,1).toUpperCase()
let restOfTheName=userName.slice(1,userName.length).toLocaleLowerCase()
let finalName=firstLetter+restOfTheName
alert(`Hay ${finalName}`)