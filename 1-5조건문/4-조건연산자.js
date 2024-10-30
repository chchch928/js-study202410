
// 돈이 3000원 이상 있으면 김밥을 먹을 수 있다.
//돈이 3000원 미만이면 굶어야 한다

let money = 2000;
// let food = (money>=3000 ) ? '김밥' : '굶어';

// if(money>=5000){
//     food='떡라면 '
// }
// else if(money>=3000){
//     food ='김밥'
// }
// else {
//     food= '굶어'
// }

// 명시적이지 못하므로 좋지않은 코드임 차라리 위에가 나음
let food = (money >= 5000) ? '떡라면' : (money >= 3000) ? '김밥' : '굶어';
console.log(`선택된 음식: ${food}`);

//시험합격 여부
let score = 70;
// let isPass = (score >=60) ? true : false; 굳이 true false 적을 필요없다.
let isPass = (score >=60) 
console.log(`합격여부 :${isPass}`);

