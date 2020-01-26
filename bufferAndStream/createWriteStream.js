const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');//먼저 createWriteStream()으로 쓰기 스트림을 만든다. 첫 번째 인자로는 출력 파일명을 입력,두 번째 인자 인자는 옵션이지만 여기서는 사용하지 않았습니다.
writeStream.on('finish', () => {//finish이벤트 리스너는 파일쓰기가 종료되면 콜백 함수가 호출                           
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');//writeStream에서 제공하는 write()메서드로 넣을 데이터를 쓴다.
writeStream.write('한 번 더 씁니다.');
writeStream.end();//end()메서드로 종료를 알리고 이 때 finish 이벤트가 발생

