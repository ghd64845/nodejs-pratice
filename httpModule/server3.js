const http = require('http');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
http.createServer((req, res) => {//createServer 메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석
    const cookies = parseCookies(req.headers.cookie);//cookie는 req.headers.cookie에 들어 있다., req.headers는 요청 헤더를 의미
    console.log(req.url, cookies);
    res.writeHead(200, {'Set-cookie' : 'mycookie = test'});//응답의 헤더에 쿠키를 기록, 첫 번째 인자는 200이라는 상태코드를 입력(200은 성공), 두 번째 인자로는 헤더의 내용 입력
    res.end('Hello Cookies');
})
.listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다.');
});
/*
쿠키는 name=dlwoghd;year=1994처럼 문자열 형식으로 오므로 
이를 {name:'dlwoghd', year:'1994'}와 같이 객체로 바꾸는 함수입니다.
 */