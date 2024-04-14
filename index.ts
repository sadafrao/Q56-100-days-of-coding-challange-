// Q 56 usimg a tool pick out just a word from a mixed bag of ites
let mixedArray = [1,"fruits" , 3 , true , "icecream"];
// this line pic only string 
let mixed = mixedArray.filter( item => typeof item === "string");
console.log(mixed);

