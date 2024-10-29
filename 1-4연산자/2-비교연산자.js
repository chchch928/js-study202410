
let a = 5;   // 5-> 0101
let b = '5';

// 모든 동등비교는 === !== 사용 (JS한정)
console.log(a == b);
console.log( a === b );
console.log(a !== b);

// ===========================

// ==은 직관적으로 결과 예측이 어려움
console.log('0'=='');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == 0);

console.log('0'==='');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

// ==============================

// 문자비교
let password ='abc1234';
console.log(password === 'abc1234');

// 문자 대소 비교
          //97   65
console.log('a'> 'A'); // true
          //65   67 
console.log('A'>'C'); // false 

console.log('가'>'나'); //false 

console.log('ace'>'ade'); //false a는 같고 c와 d를 비교했을때 d가 이김








