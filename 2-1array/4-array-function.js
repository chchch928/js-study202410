let foodList = ["닭꼬치", "볶음밥", "족발", "파스타"];

// indexOf() : 배열의 특정요소가 몇번 인덱스에 있는지 알려줌

let idx = foodList.indexOf("볶음밥");
console.log(`index: ${idx}`);

// 1억개의 음식 데이터 중에 족발을 찾아서 보쌈으로 수정
foodList[foodList.indexOf("족발")] = "보쌈";

console.log(foodList);

//리스트에 없는 데이터를 확인하려면 index에 -1이 배정된다
let idxx = foodList.indexOf("짜장면");
console.log(`index: ${idxx}`);

//includes() : 배열에 특정요소가 있는지 유무 확인
let flag = foodList.includes("파스타");
console.log(`flag : ${flag}`);

if (!foodList.includes("파스타")) {
  //음식목록에 파스타가 없으면
}

console.log("=================================");

//slice( ): 배열을 원하는 만큼 분할해서 복사배열로 리턴

let numbers = [0, 1, 2, 3, 4, 5, 6];

let slicednumbers = numbers.slice(1, 3); // 1이상 3미만 ->1,2가 타겟

console.log(`slicenumbers: `, slicednumbers);
console.log(`numbers: `, numbers);

let copy1 = numbers.slice(3); //end 생략시 끝까지 분할
console.log(copy1);
let copy2 = numbers.slice(); //둘다 생략시 처음부터 끝까지 분할
console.log(copy2);

// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업가능)
// 배열 원본이 손상됨 : 안전한 작업을 위해서는 복사하고서 작업

console.log("=====================");

console.log(foodList);

foodList.splice(2, 1); //2번 인덱스 1개만 지우겠습니다 -> 보쌈삭제

console.log(foodList);

// 0번 인덱스 1개(딝꼬치)만 마라탕으로 바꾸겠습니다
foodList.splice(0, 1, "마라탕");

console.log(foodList);

// 중간 삽입 기능
foodList.splice(2, 0, "짜장면"); //2번 인덱스 자리인 파스타를 뒤로 밀고 짜장면 추가해주세요
console.log(foodList);
