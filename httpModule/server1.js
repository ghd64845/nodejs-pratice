const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Node!</p>');
}).listen(8088, () => {
    console.log('8088번 포트에서 서버 대기 중입니다.');
});