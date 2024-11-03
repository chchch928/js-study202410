
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
  
console.log(`반복문 종료!`);

//중첩 반복문의 break
// 기본적으로 break는 가까운 위치의 조건문만 종료시킨다
// break를 클릭해보면 음영이 생기는데 어디에 break가 적용되는지 알 수 있다.
// for문에 이름을 붙여주면 break 뒤에 이름을 붙여주면 그 for문에 적용된다.
console.log('=============');

apple: for(let i=0; i<3 ;i++){
grape:    for(let j=0 ;j<2 ;j++){
        if( i === j){
            break apple;
        }
        console.log(`${i},${j}`);
        
    }
}
