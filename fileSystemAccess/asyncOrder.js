const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme2.txt', (err,data) => {
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme2.txt', (err,data) => {
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
        });
    });
});
console.log('끝');
/*
이전 readFile()의 콜백에 다음 readFile()을 넣어주면 순서가 유지 된다.
콜백 지옥이 펼쳐지지만 순서가 어긋나지 않고 콜백지옥은 promise나 async/await로 어느 정도 해결할 수 있다.
 */