
// 1부터 100사이의 숫자 중 랜덤으로 숫자 하나를 생성하여
// 해당 숫자가 77이 나올 때까지 반복해서 숫자를 생성한다.


/*
랜덤 숫자 생성 (난수생성)
  Math.random()                       - 0.0 <= ~ < 1.0
  Math.random() * 100                 - 0.0 <= ~ < 100.0
  Math.floor(Math.random() * 100)     - 0  <= ~ < 100
  Math.floor(Math.random() * 100) + 1 - 1  <= ~ < 101
*/
/* 소수점 처리 함수 
Math.ceil() - 올림처리 ex) 5.4 ~ 6
Math.flood() - 내림처리 ex) 7.8 ->7
Math.round() - 반올림처리 ex) 3.6 ->4

정수 난수 생성 공식
x이상 y이하의 정수 난수 생성
Math.floor(Math.random() * (y-x+1)) +x;

47~65
Math.floor(Math.random() * (65-47+1)) +47;
*/


// Math.floor(Math.random() * 10) +1;
// console.log(randomNum);

// 숫자 7이 나올 때까지 랜덤정수를 만들어서 반복
// 루프횟수?
let num = 0;
while( num !== 7){
    num = Math.floor(Math.random() * 10) +1;
    console.log('랜덤 정수를 만들었습니다.');
    
}
console.log(`반복문 종료! num = ${num}`);
