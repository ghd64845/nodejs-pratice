const util = require('util');
const crypto = require('crypto');
/*
deprecated란?

deprecated는 프로그래밍 용어로 , '중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될' 것이하는 뜻
새로운 기능이 나와서 기존 기능보다 더 좋을 때, 기존 기능을 deprecated처리하곤 한다.
기능을 제거하지는 않지만 곧 없앨 예정이므로 더 이상 사용하지 말라는 의미입니다.
 */
const dontUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });
/*
util.seprecate : 함수가 deprecated 처리되었음을 알려준다. 첫 번째 인자로 넣은 함수를 사용했을 때 경고 메세지가 출력됩니다.
                 ,두 번째 인자로 경고 메세지를 넣어 주면 된다.
util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿔 준다. 바꿀 함수를 인자로 제공하면 된다. 이렇게 바꾸어두면 async/await 패턴까지 사용할 수 있다
 */