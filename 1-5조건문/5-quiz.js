let score = 92;


// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else {
//   grade = 'D';
// }

// console.log(grade); // 예상 출력: A

let grade = (score>=90) ? 'A' : (score>=80) ? 'B': (score>=70) ? 'C' : 'D'
console.log(`${grade}`)