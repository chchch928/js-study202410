let numbers = [10, 20, 30, 40, 50];

console.log(typeof numbers); //타입이 object로 나옴

console.log(`numbers`, numbers);

console.log(numbers[1]); // 20
console.log(numbers[2] ** 2); // 30의 제곱은 900

numbers[0] = 999; // 배열의 요소(element) 수정
numbers[3]++; // 40+1 =41
console.log(numbers);

// 배열의 총 요소(데이터) 수

console.log(numbers.length);

// 배열의 마지막 요소 접근 (총갯수 -1)

console.log(numbers[numbers.length - 1]);

//배열의 순회 : 전체 데이터를 순차적으로 접근
console.log("=====================");

for (let i = 0; i < numbers.length; i++) {
  console.log(`${i + 1}번째 데이터 : ${numbers[i]}`);
}

// 배열의 순회 전용 반복문
console.log("======================");
let weekdays = ["월", "화", "수", "목", "금", "토", "일"];

// for ~ of 전체반복 돌릴 때 더 편리
// for(let day of weekdays){
//     console.log(`${day}요일`);

// }

// 조건을 걸어 몇개만 뽑아내고 싶을 때 사용
for (let i = 0; i < weekdays.length; i++) {
  console.log(`${weekdays[i]}요일`);
}

// 배열 변수 이름 관례 : 복수형 , -List 어미
let hobbies = ["스키", "요리"];
let hobbyList = ["스키", "요리"];
