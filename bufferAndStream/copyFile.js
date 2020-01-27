const fs =require('fs');

fs.copyFile('readme4.txt', 'writeme4.txt', (error) => {//fs.copyFile() : 첫 번째 인자는 복사할 파일, 두 번재 인자는 복사 될 경로 , 세 번재 인자는 복사 후 실행될 콜백 함수
    if(error){
        return console.error(error);
    }
    console.log('복사 완료');
});