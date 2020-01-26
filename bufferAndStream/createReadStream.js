/*
*Stream*
버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내는 방식 stream
ex) 버퍼 1MB를 만든 후 100MB 파일을 백 번에 걸쳐 보내는 것, 메모리 1MB로 100MB 파일을 전송할수 있다
 */
const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});//먼저 createReadStream() 으로 읽기 스트립을 만들어 준다. 첫 번째 인자로 읽을 파일 경로를 넣는다.
const data = [];                                                             //두 번째 인자는 옵션 객체인데, highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션    
                                                                             //기본 값은 64KB이지만 16KB로 설정
readStream.on('data', (chunk) => {//readStream()은 이벤트 리스터를 붙여 사용한다. 보통 data, end, error이벤트를 사용
    data.push(chunk);//data배열을 미리 만들어 들어오는 chunk들을 하나씩 push() 한다.
    console.log('data:', chunk, chunk.length);
});
readStream.on('end', () => {//파일을 다 읽으면 end이벤트 발생
    console.log('end :', Buffer.concat(data).toString());//Buffer.concat()으로 합쳐서 다시 문자열을 만든다.
});

readStream.on('error', (err) => {//파일의 크기가 16B보다 크다면 여러 번 발생할 수 있다.
    console.log('error :', err);
});