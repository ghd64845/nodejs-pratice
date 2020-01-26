const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);//readFile의 결과물은 buffer라는 형식으로 제공
    console.log(data.toString());
});