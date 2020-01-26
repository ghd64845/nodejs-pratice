const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});
/*
 현재는 주로 pbkdf2나 bcrypt,scrypt라는 알고리즘으로 비밀번호를 암호화하고 있습니다. 이 중 노드에서 지원하는 pbkdf2는 
 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것
 */