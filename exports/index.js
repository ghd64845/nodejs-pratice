const {odd, even} = require('./var'); 
const checkNumber = require('./func');   //var.js와 func.js둘다 참조 ,모듈 하나가 여러 개의 모듈에 사용할 수 있다.

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));