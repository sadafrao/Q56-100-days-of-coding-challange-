// Q 56 usimg a tool pick out just a word from a mixed bag of ites
var mixedArray = [1, "fruits", 3, true, "icecream"];
// this line pic only string 
var mixed = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(mixed);
