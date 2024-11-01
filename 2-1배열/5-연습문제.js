
console.log('=============연습문제 1=============');


let fruits1 = ['사과', '바나나'];
fruits1.push('오렌지');  // 마지막에 '오렌지' 추가
fruits1.shift();           // 첫 번째 요소 제거

console.log(fruits1); // 예상 출력: ['바나나', '오렌지']

console.log('===============연습문제 2===============');

let numbers = [5, 10, 15, 20, 25];
let index = numbers.indexOf(15); // 15의 인덱스 찾기
console.log(index); // 예상 출력: 2

let slicedNumbers = numbers.slice(1, 4); // 인덱스 1부터 3까지 추출
console.log(slicedNumbers); // 예상 출력: [10, 15, 20]

console.log('============연습문제 3==================');

let fruits = ['바나나', '사과', '오렌지', '망고'];
fruits.splice(0, 2, '포도', '키위'); // 첫 번째와 두 번째 요소를 제거하고 새로운 요소 추가

console.log(fruits); // 예상 출력: ['포도', '키위', '오렌지', '망고']

console.log('============연습문제 4====================');

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

let members =['유노윤호','최강창민','영웅재중','믹키유천', '시아준수']

while(members.length>0) { 

let del = prompt(`현재멤버 : [${members}] \n 삭제할 이름을 입력하세요`)

let idx = members.indexOf(del)

if (idx === -1){
    alert(`${del}은 잘못된 이름입니다. \n 다시입력하세요!`)
    
}
else{
    members.splice(idx,1)
    alert(`삭제완료~ \n 남은멤버:[ ${members} ]`)
}
}

// while member.length = 0으로 지정하였는데 -> members.length > 0이 맞는표현이다
// 잘못된이름을 처리할때 del !== members가 아니라 idx === -1을 활용해야 한다
