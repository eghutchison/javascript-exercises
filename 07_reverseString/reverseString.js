const reverseString = function(word) {
    let newWord="";
    let wordLength = word.length;
    for (let i=wordLength - 1; i >= 0; i--){
        newWord+=word.charAt(i);
        }
        return newWord;
    };

// Do not edit below this line
module.exports = reverseString;
