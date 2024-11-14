const student = {
  stuName: "뽀로로",
  age: 5,
  birthDay: "2020-01-03",
};

// const name = student.stuName
// const age = student.age
// const birthDay = student.birthDay

const { stuName: name, age, birthDay: birth } = student;
console.log(`stuName:${name}`);
console.log(`age: ${age}`);
console.log(`birthDay: ${birth}`);

console.log("============================");

const divStyle = {
  "font-size": "16px",
  "border-radius": "50%",
};
console.log(divStyle["font-size"]);

const { "font-size": fontSize, "border-radius": bddr } = divStyle;
console.log(fontSize);
console.log(bddr);

function myPetInfo({ name, age }) {
  console.log(`우리 애완동물 이름은 ${name}입니다`);
  console.log(`우리 애완동물 나이는 ${age}입니다`);
}

const dog = { name: "초코", age: 3, kind: "진돗개", injection: true };
const cat = { name: "나비", age: 2 };

myPetInfo(dog);
myPetInfo(cat);

const { kind, injection, ...dogRest } = dog;
console.log(dogRest);

// 스프레드
// cat의 원본은 유지하면서 새 객체에 injection 프로퍼티를 추가하고 싶어

// const copyCat =cat 이렇게 하면 사본에 프로퍼티를 추가하면 원본에도 프로퍼티가 추가되므로 사용하면 안됨
const copyCat = {
  ...cat,
  injection: false, // 새 프로퍼티를 추가할 수 있다
  age: 10, // 이미 추가한 나이도 변경할 수 있다
};
console.log(cat); // 원본이 유지되고있음을 확인할 수 있다.

console.log(copyCat);
