console.log("답안1");

let a = 15;
let b = 11;
let c = 99;

// 가장 작은 수 찾기
let min;
if (a < b) {
  // a가 최소값
  if (a < c) {
    // a가 최소값
    min = a;
  } else {
    // c가 최소값
    min = c;
  }
} else {
  // b가 최소값
  if (b < c) {
    // b가 최소값
    min = b;
  } else {
    // c가 최소값
    min = c;
  }
}
console.log(`최소값: ${min}`);

console.log("답안2");

let d = 15;
let e = 11;
let f = 99;

let min_num = d;
if (e < min_num) {
  min_num = e;
}
if (f < min_num) {
  min_num = f;
}
console.log(`최솟값:${min_num}`);