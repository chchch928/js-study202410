
let userName = prompt('당신의 이름은?');
let userAge = prompt('당신의 나이는?');

// 출생년도 구하기 (한국나이)
let currentYear = new Date().getFullYear(); // 현재연도 구하기
let birthYear = currentYear - userAge + 1;

alert(`${userName}님은 ${birthYear}년생이시군요?`);

//1단계로 prompt와 alert와 글씨만 작성한 후 확인
//2단계로 이름의 변수를 만들고 이름 출력부분에 변수이름 입력
//3단계로 나이의 변수를 만들고 나이 출력부분에 변수이름 입력