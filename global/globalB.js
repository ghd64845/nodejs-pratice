const A = require('./globalA');// globalA 참조

global.message = '안녕하세요';
console.log(A());//global.message값을 반환 해준다.