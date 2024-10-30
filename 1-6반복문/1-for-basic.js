
// 초기변수 세팅; 끝 조건식; 변수증감식
// for(let n = 1; n<=50 ; n++){
//     // 반복할 코드
//     console.log(`${n}번 학생 안녕하세요!`);
// }
// n=1 (초기세팅) -> n <=50 (끝 조건식) -> console.log (반복할 코드)-> n++ (변수증감식) 순으로 돈다
//n=1 은 최초 한번만 실행 

// for(let i = 0 ; i < 5; i++){
//     console.log('안녕');
    
// }

//구구단 2단 출력
let level = 7; //단수
for(let line = 1; line<= 9; line ++){
    console.log(`${level} x ${line} =${level*line}`);
}
// end for
console.log('반복문 종료');

console.log('=====================');

// 1~10까지의 누적합 == 55
let total = 0

for (let n =1; n<= 10; n++){
    total += n;
}
console.log(`1~10까지의 총합: ${total}`);

console.log('=====================');

for(let i = 5; i > 0 ; i--){
    console.log(`${i}!!`);
    
}
