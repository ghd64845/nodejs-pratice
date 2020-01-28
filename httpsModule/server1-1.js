const https = require('https');
const fs = require('fs');

https.createServer({ //createServer 인자를 두개 받는다. 첫 번째 인자는 인증서에 관련된 옵션 객체
    cert: fs.readFileSync('도메인 인증서 경로'),//인증서를 구입하면 pom이나 crt,또는 key 확장자를 가진 파일들을 제공
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],//파일들을 fs.readFileSync메서드로 읽어서 cert,key,ca 옵션에 알맞게 넣어준다.
}, (req, res) => {// 두 번째 인자는 http모듈과 같이 서버 로직
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다.');
});
/*
http2 모듈은 SSL암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용할 수 있다.
 */