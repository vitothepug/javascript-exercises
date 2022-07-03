
let repeatString = function(string, num) {
    let newString=''
    if (num < 0) return 'ERROR';
    for (var i = 1; i <= num; ++i) {
       newString += string
    }
    
    return (newString);
};
// console.log(repeatString("hey",10))
// repeatString("hey",1)
string=''

// Do not edit below this line
module.exports = repeatString;
