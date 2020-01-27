const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {//fs.access(경로, 옵션, 콜백) : 폴더나 파일에 접근할 수 있는지를 체크
    if(err){           //F_OK는 파일 존재 여부, R_OK는 읽기 권한 여부, W_OK는 쓰기 권한 여부를 체크
        if(err.code === 'ENOENT'){//파일/폴더에 권한이 없다면 에러가 발생, 파일/폴더가 없을 때 에러코드는 ENOENT이다.
            console.log('폴더 없음');
            fs.mkdir('./folder',(err) => {//fs.mkdir(경로, 콜백) : 폴더를 만드는 메서드 ,이미 폴더가 있다면 에러가 발생하므로 먼저 access() 메서드를 호출하여 확인하는 것이 중요!
                if(err){
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js', 'w', (err, fd) => {//fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd 변수)를 가져오는 메서드 입니다.
                    if(err){                                   //파일이 없다면 파일을 생성한 뒤 그 아이디를 가져온다.가져온 아이디를 사용해 fs.read()나 fs.write()로 
                        throw err;                             //읽거나 쓸 수 있다. 두 번째 인자는 어떤 동작을 할 것인가 설정 쓰려면 w, 읽으려면 r, 추가하려면 a
                    }
                    console.log('빈 파일 만들기 성공', fd);
                    fs.rename('./folder/file.js','./folder/newfile.js', (err) => {//fs.rename(기존 경로, 새 경로, 콜백) : 파일의 이름을 바꾸는 메서드
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });
                });
            });
        } else {
            throw err;
        }
    } else {
        console.log('이미 폴더 있음');
    } 
});