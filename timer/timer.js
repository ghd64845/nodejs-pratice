const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => { // 1초후 interval콜백이 실행
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => { //clearTimeOut을 사용하여 취소, 실행되지 않는다.
    console.log('실행 되지 않습니다.');
}, 3000);

setTimeout(() => { // 2.5초후에 timeout2, interval을 취소
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => { //제일 먼저 실행
    console.log('즉시 실행');
})

const immediate2 = setImmediate(() => {// clearImmediate를 사용하여 취소했기 떄문에 실행 되지 않는다.
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);// clearImmediate를 사용하여 취소했기 떄문에 실행 되지 않는다.
//3초 후에는 로그가 아무것도 남지 않는다.