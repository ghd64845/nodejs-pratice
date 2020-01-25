const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};
console.time('전체 시간');//console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd사이의 시간 측정
console.log('평범한 로그입니다 쉽표로 구분해 여러 값을 찍을 수 있습니다.');//평범한 로그를 콘솔에 표시, console.log(내용, 내용, ...)처럼 여러 내용 표시 가능
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요.');//에러를 콘솔에 표시

console.dir(obj, {colors: false, depth : 2});//객체를 콘솔에 표시할 때 사용
console.dir(obj, {colors : true, depth : 1});

console.time('시간 측정');
for(let i =0; i < 100000; i++){
    continue;
}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추척');//에러가 어디서 발생했는지 추적할 수 있게 해준다.(보통은 에러 발생 시 에러위치를 알려주나 위치가 나오지 않는다면 사용)
}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');