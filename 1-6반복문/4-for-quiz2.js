
// 특정 정수를 입력받고
// 해당정수의 약수들을 모두 세로로 출력
// 마지막에 총 약수의 개수를 출력한다
// let targetNumber = 10;

// 10의 약수: 1,2,5,10
// 해당 수를 1부터 그 수까지 나누었을때 나누어 떨어지는 수

let targetNumber = +prompt('양의정수: ')

let count = 0;
let result =''

for (let i=1; i<=targetNumber; i++){
    if(targetNumber % i ===0){
        result += `${i}\n`
        count++;
        
    }
}
result  += `약수의 개수: ${count}개`;

alert(result);
