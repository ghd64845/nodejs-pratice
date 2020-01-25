setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {//process.nextTick은 setImmediate나 setTimeout보다 먼저 실행
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
},0);
Promise.resolve().then(() => console.log('promise'));//resolve된 promise도 nextTick처럼 다른 콜백들보다 우선시 된다.

//process.nextTick과 promise를 마이크로테스크라고 따로 구분지어 부른다.
/*
microtask는 ㅇ리반 task보다 우선 순위를 갖는다.

*/