
let num = 20;
let address ='서울시';
let result ='10'

//타입이 다르면 연산불가 자바는 빡빡하지만 자바스크립트는 좀 널널
//압묵적 형 변환 (implicit type casting)
//숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경

console.log(10/4); //자바에선 2로출력 자바스크립트에선 2.5로 출력
console.log(num+result); 
//2010으로 출력 타입을 문자로 바꿔서 20과 10을 문자열타입으로 합침

//덧셈했을 때는 결과가 string타입으로 뺄셈했을 때는 number타입으로 -> 줏대없는 자바스크립트

//덧셈 제외 산술연산은 문자를 숫자로 변환시도한 후 
//변환 성공시 산술연산 수행 실패시 NaN 출력
console.log(num-result); //10 

let money = 1;
let fruits ='사과';

// 명시적 형 변환
const n1 ='10';
const n2 =20;
const n3 = Number(n1)+n2; //명시적으로 30을 만들고 싶다.
                          //-> n1을 number로 만들어버리자
console.log(`n3:${n3}`);


