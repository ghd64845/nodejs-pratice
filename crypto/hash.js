/**
 단방향 암호화
 
 비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화합니다.
 복호화할 수 없는 암호화 방식을 뜻합니다.
 복호화는 암호화된 문자열을 원래 문자열로 되돌려놓는 것을 의미
 즉, 단방향 암호화는 한 번 암호화하면 원래 문자열을 찾을 수 없다.
 단방향 암호화 알고리즘은 주로 해시 기법을 사용
 해시 기법이란 어떤 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식이다.
 */
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hax:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
//createHash : 사용할 해시 알고리즘을 넣어준다. md5, sha1, sha256, sha512등이 가능 md5, sha1은 취약점이 발견되었다. 현재는 sha512정도로 충분
//update : 변환할 문자열을 널어준다.
//digest : 인코딩할 알고리즘을 넣어준다. base64, hex, larinl이 주로 사용, base64가 결과문자열이 짧아 많이 사용, 변환된 문자열 반환