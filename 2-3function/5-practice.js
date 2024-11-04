
console.log('=============== 연습문제 1 ==================');

function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
  }
  
  // 함수 호출
  greet('홍길동'); // 예상 출력: 안녕하세요, 홍길동님!
  
  console.log('=============== 연습문제 2 ===================');

  const calculateArea = function(radius) {
    return 3.14 * radius * radius;
  };
  
  // 함수 호출 예시
  let area = calculateArea(5);
  console.log('원의 넓이:', area); // 예상 출력: 원의 넓이: 약 78.54

console.log('================= 연습문제 3 =====================');

let globalCount = 1;

function countExample() {
  let localCount = 1;
  globalCount++;
  localCount++;
  console.log('함수 내부 - globalCount:', globalCount); // 예상 출력: 2
  console.log('함수 내부 - localCount:', localCount);   // 예상 출력: 2
}

// 함수 호출 전
console.log('함수 호출 전 - globalCount:', globalCount); // 예상 출력: 1

countExample();

// 함수 호출 후
console.log('함수 호출 후 - globalCount:', globalCount); // 예상 출력: 2
console.log('함수 호출 후 - localCount:', localCount); // 예상 출력: 오류 (localCount is not defined) 
// localCount는 -> function 내부에서 정의된 변수이므로 내부에서만 출력되고 외부에서는 출력되지않는다.
