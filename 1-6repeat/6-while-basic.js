
// 반복횟수가 정해져 있을때 자주 사용
for(let n=1; n<=5; n++){
    console.log(`${n}번 학생 안녕하세요!`)
}

// 반복횟수가 정해져 있지 않을때 자주 사용
let i =1;
while (i <=5) {
    console.log(`${i}번 학생 안녕하세요!`);
    i++;
}
console.log('=====================');


//for문을 while문으로 바꾸기 
// 10안에 있는 2의 배수를 가로로 출력하기
let result = '';
let h = 2
while ( h <= 10) {
  result += `${h} `;
  h += 2;
}
console.log(result);

// 1~50 사이 6의 배수 출력하기
console.log('==================');
let j = 1
while ( j <= 50 ) { // i는 1부터 50까지 1씩 증가하면서 반복
  if (j % 6 === 0) { // 반복하면서 6의 배수인지 확인한다
    console.log(j);  // 6의 배수라면 출력한다
  }
  j++;
}

// 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
console.log('==================');
let x = 1;
while ( x <= 100 ) {
  if (x % 7 === 0 && x % 14 !== 0) {
    console.log(x);
  }
  x++;
}

// 1~7777 안에 있는 3의 배수 개수 알아내기
console.log('==================');

let count = 0;
let a = 1
while ( a <= 7777) {
  if (a % 3 === 0) {
    // 3의 배수일 경우 실행될 코드
    count++;
  }
  a++;
}
console.log(`3의 배수의 총 개수: ${count}개`);
