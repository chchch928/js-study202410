
// 1. 이름 중복시 에러가 안남
let apple = 10;
// let apple = 20;
console.log(apple)


// 2. 블록레벨 스코프 지원 X -블록안에서만 임시사용 불가
let num =10;
if (true) {
    let num = 20;
    console.log('if안의 num', num)
}
    console.log('if밖의 num', num)

// 3. hoisting : 변수선언을 자동으로 위로 끌어올림
console.log(ironman);
let ironman ='토니 스타크'; // var로 하면 오류가 아니라 undefined 출력