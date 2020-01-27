const fs = require('fs');

fs.readdir('./folder', (err,dir) => {//fs.readdir(경로, 콜백) : 폴더 안의 내용물 확인
    if(err){
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./folder/newfile.js', (err) => {//fs.unlink(경로, 콜백) : 파일을 지운다.
        if(err){
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./folder', (err) => {//fs.rmdir(경로,콜백) : 폴더를 지운다. 폴더 안에 파일이 있다면 에러가 발생
            if(err){
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});