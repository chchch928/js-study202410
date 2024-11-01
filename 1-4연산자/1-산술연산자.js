
//js는 나눗셈을 수행할 때 실수 나눗셈을 수행(소수점이 도출됨)
console.log(27/5);  //5.4

//나눗셈의 몫만 구하기
console.log(Math.floor(27/5)); //5

//나머지 연산
console.log(27 % 5); //2

//뒤에 숫자가 더 크면 앞의 숫자가 그대로 나머지 몫은 0
console.log(4 % 10); //4
console.log(10 % 0); // NaN

//제곱 연산 (ES6+)
console.log(2**4); //2의 4제곱은 16

console.log('===============');


//증감 연산자
let x = 3;
x++; //숫자 1 증가
++x;
x--; //숫자 1 감소
--x; 
console.log(`x:${x}`);  //x:3

// 전위 연산, 후위 연산
let n1 = 10;
let n2 = n1++; //뒤에 ++이 붙으면 =이 더 강함  앞에 ++이 붙으면 ++이 더 강함
console.log(`n1:${n1}, n2:${n2}`); // n1:11, n2:10

let n3 = 10;
let n4 = ++n3; 
console.log(`n3:${n3}, n4:${n4}`); //n3:11, n4:11

let myNum = 5; 
myNum += 3; // myNum = myNum +3; // 8
myNum -= 6; // myNum = myNum -6; // 2
myNum *= 5; // 10
myNum %= 4; // 2
myNum **= 3; // 8
console.log(`myNum:${myNum}`); //myNum:8






