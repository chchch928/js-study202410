
console.log(10*3);

/* 브라우저 전용함수: nodr.js 환경에서는 실행 불가

alert() 브라우저 출력창을 띄움
prompt(): 브라우저 입력창을 띄움
confirm(): 브라우저 확인/취소창을 띄움
*/

// alert('야호!')

// let username = prompt('당신의 이름은 무엇입니까?');
// alert (`당신은 ${username}님이군요!`);

// 아무것도 설정하지 않았을 때는 숫자를 문자로 취급
// alert안의 num1과 num2에 각각 Number를 앞에 붙여 데이터타입을 변경하는 방법도 있긴하다. 
// prompt앞에 +를 붙이면 더하기라는 의미도 있지만 양수로 취급해주는 것도 있다.
let num1 = +prompt('좋아하는 첫번째 숫자를 입력하세요!');
let num2 = +prompt('좋아하는 두번째 숫자를 입력하세요!');
alert(`당신이 좋아하는 숫자의 합은 ${num1+ num2}입니다.`);