
let petList =['멍멍이','야옹이','짹짹이'];
console.log(petList);

// push() : 배열 맨끝에 데이터 추가
petList.push('꼬부기');
petList.push('오랑이','꿀꿀이','꽥꽥이'); // 데이터 여러개도 추가 가능

console.log(petList);
console.log(petList.length);

// pop(): 배열 맨 끝 데이터 삭제
petList.pop();
petList.pop();
petList.pop();
petList.pop();
petList.pop();

let x =petList.pop();


console.log(petList);
console.log(`x:${x}`); // 배열에선 제거되어도 따로 팝업해서 빼놓을 수 있다

// shift() : 배열의 첫번째 요소 삭제
//unshift(): 배요열의 첫번째 요소 추가

petList.unshift('징징이','다람이')
petList.shift()

console.log(petList);
