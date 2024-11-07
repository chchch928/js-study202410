// 우리 집 강아지가 2마리 - 초코,해피

let dog1 = {
  name: "초코", // 프로퍼티(속성)
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vege: true,
  favorites: ["산책", "간식"],
};
// 데이터를 묶어서 어떤데이터인지 알 수 있도록 함

let dog2 = {
  name: "해피",
  age: 5,
  tall: 40,
  weight: 8,
  injection: true,
  vege: false,
};

// name,age,injection,favorites는 key라고 부름
//key

let cat1 = {
  name: "나비",
  age: 4,
  injection: true,
  favorites: ["낮잠", "털뭉치"],
  "my hobby": "시비걸기", // 권장하지 않음
};

// 객체 프로퍼티 접근하기
console.log(dog1.name);
console.log(cat1.age);

// 따옴표로 묶여있는 프로퍼티에 접근

console.log("=================");

console.log(cat1["my hobby"]);
