const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate=1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');
const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parseUrl); //주소를 분해한다. WHATWG 방식과 비교하면 userName과 password대신 auth속성이 있고, searchParams대신 query가 있다.
console.log('url.format()', url.format(parseUrl));//WHATWG방식의 url과 기존 노드의 url모두 사용할 수 있다. 분해 되었던 url객체를 다시 원래 상태로 조립한다.
/**
 WHATWG 방식은 search부분을 searchParams라는 특수한 객체로 반환하므로 유용
 search 부분은 보통 주소를 통해 데이터를 전달할 때 사용된다.
 search는 물음푤 시작, 그 뒤에 key = value 형식으로 데이터를 전달합니다. 여러 키가 있을시 &로 구분
 */