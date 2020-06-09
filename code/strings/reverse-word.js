// WAP to reverse the word hello//

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var revstr= reverseString('hello');
console.log(revstr)
