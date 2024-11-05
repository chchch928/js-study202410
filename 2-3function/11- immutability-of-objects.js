
// let이 아니라 const를 사용해서 교체할 수 없게 만든다
// 자바스크립트 변수는 무조건 const로 선언하세요
// 그리고 변경해야 할 변수만 부분적으로 let으로 교체

 const dog = {
    name:'해피',
    kind:'진돗개',
    age: 3
 };

 // 프로퍼티 값 변경
 dog.age = 4;

 // 프로퍼티 값 변경이 아닌 기존 데이터를 날려버리는 행위
 dog = {
    name:'초코'
 }; 
 console.log(dog);
 
 const a =10;
 const b =20;
 const result = a+b;

 for(let i =0; i<3; i++){
    
 }