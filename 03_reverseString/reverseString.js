const reverseString = function(inputWord) {

let los=inputWord.length
let newWord=''
for (var i = los; i > 0; --i) {
    // console.log(inputWord.slice(i-1,i))
    newWord += inputWord.slice(i-1,i)
    // console.log(newWord)
 }
return(newWord)
};
// console.log(reverseString("Hello World"))
// Do not edit below this line
module.exports = reverseString;

