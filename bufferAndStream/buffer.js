const buffer = Buffer.from('저를 버퍼로 바꿔보세요');// from(문자열): 문자열을 버퍼로 바꿀 수 있습니다. length 속성은 버퍼의 크기를 알려준다.
console.log('from():', buffer);
console.log('length():', buffer.length);
console.log('toString():', buffer.toString());// 버퍼를 다시 문자열로 바꿀 수 있다. 이때 base64나 hex를 인자로 넣으면 해당 인코딩으로도 변환

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);//배열 안에 든 버퍼들을 하나로 합친다.
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);//빈 버퍼를 생성, 바이트를 인자로 지정해 주면 해당 크기의 버퍼가 생성
console.log('alloc():', buffer3);
/*
readFile() 방식의 버퍼가 편리하기는 하지만 문제점이 있다.
만약 용량이 100MB인 파일이 있으면 읽을 때 메모리에 100MB의 버퍼를 만들어야 한다. 이 작업을 동시에 열 개만 해도
1GB에 달하는 메모리가 사용된다. 특히 서버 같이 몇 명이 이용할지 모르는 환경에서는 메모리 문제가 발생할 수 있다.
 */