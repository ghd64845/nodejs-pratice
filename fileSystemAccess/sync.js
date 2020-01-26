const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');
/*
콜백함수를 넣은 대신 직접 return값을 받아 온다.
단점 : readFileSync 메서드를 사용하면 요청이 수백 개 이상 들어왔을 때 성능에 문제가 생긴다.
sync 메서드를 사용할 때는 이전 작업이 끝나야 다음 작업이 진행되는데 즉, 백그라운드가 작업하는
동안 메인 스레드는 아무것도 못하고 대기 하고 있어야 한다.
 */