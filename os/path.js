const path = require('path');

const string = __filename;

console.log('path_sqp:', path.sep); //경로의 구분자
console.log('path.delimiter:', path.delimiter); // 환경변수의 구분자
console.log('-----------------------------');
console.log('path.dirname():', path.dirname(string));// 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string));// 파일의 확장자
console.log('path.basename():', path.basename(string));// 파일 이름
console.log('path.basename():', path.basename(string, path.extname(string)));//파일의 이름만 보이고 싶다면 두번 째 인자를 파일 확장자를 넣는다.
console.log('-----------------------------');
console.log('path.parse()', path.parse(string));// 파일의 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({ // path.parse()한 객체를 파일경로로 합친다.
    dir : 'C:\\users\\ghd68',
    name : 'path',
    ext : '.js', 
}));
console.log('path.normarlize():', path.normalize('C://users\\\\ghd68\\\path.js'));// /나\를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 반환 해준다.
console.log('----------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));//파일의 경로가 절대 경로인지 상대경로인지 ture나 false로 알려준다.
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('----------------------------');
console.log('path.relative():', path.relative('C:\\users\\ghd68\\path.js', 'C:\\'));//경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다.
console.log('path.join():', path.join(__dirname,'..','..','/users','.','/ghd68'));//여러 인자를 넣으면 하나의 경로로 합쳐준다. 상대경로인 ..(부모디렉터리)과 .(현 위치)도 알아서 처리
console.log('path.resolve():', path.resolve(__dirname,'..','users','.','/ghd68'));// path.join()과 비슷하지만 path.resolve는 /를 만나면 절대 경로로 인식해서 앞의 경로를 무시, path.join()은 상대경로로 처리