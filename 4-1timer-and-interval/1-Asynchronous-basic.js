
// 동기: 코드가 순차적으로 실행된다.
// 비동기: 코드가 순서없이 실행된다.

// 전형적인 동기 코드 hello가 모두 실행된 후 bye가 실행
for (let i =0; i<3; i++){
    console.log(`hello${i}`);
    
}
for (let i =0; i<4; i++){
    console.log(`bye${i}`);
    
}

// setTimeout: 비동기 타이머 -코드를 비동기로 동시에 실행시킴


console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');

//output
//first
//third
//second


console.log('오늘의 할일!');

setTimeout(()=>{
    console.log('서브웨이 샌드위치를 먹을 예정이에요!');

},1000) // 지연시간 설정



