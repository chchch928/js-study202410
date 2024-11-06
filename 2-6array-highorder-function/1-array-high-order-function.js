const numbers = [1,2,3,4,5,6];
const foods = ['제육볶음','김치찌개','육개장','파스타','된장찌개']
const userList = [
    {
      account: 'abc1234',
      userName: '대길이',
      job: '추노',
      address: '서울',
      hobbys: ['수영', '축구', '테니스'],
      salary: 5400000,
      age: 35,
    },
    {
      account: 'banana',
      userName: '빠나나',
      job: '과일',
      address: '서울',
      hobbys: ['푸드파이팅', '테니스'],
      salary: 9700000,
      age: 18,
    },
    {
      account: 'park1234',
      userName: '주차왕',
      job: '발렛파킹',
      address: '경기',
      hobbys: ['족구', '축구', '테니스', '영화감상'],
      salary: 3900000,
      age: 56,
    },
    {
      account: 'fire',
      userName: '불꽃남자카리스마',
      job: '게이머',
      address: '서울',
      hobbys: ['독서', '테니스'],
      salary: 7900000,
      age: 42,
    },
  ];

// for (const n of numbers){
//     console.log(n);
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 1) {
//     console.log(numbers[i]);
//   }
// }


// forEach(): 배열의 반복문을 처리 위에 둘을 합쳐놓은 느낌
// numbers.forEach(function(n,i){
//     if(i%2 === 1){
//     console.log(n);
//     }
// })

// numbers.forEach(function(n,i,arr){
//    console.log(`n:${n}`);
//    console.log(`i:${i}`);
//    console.log(arr);
   
// })

// foods.forEach((food,idx)=>{
//     console.log(`${food} 꿀맛! index:${idx}`);
    
// })

// function forEach(callbackFN){
//     for (let i =0; i<foods.length;i++){
//         callbackFN(foods[i],i)
//     }
// }

console.log('===================================');

// userList.forEach((user)=>{
//     console.log(`제 이름은 ${user.userName}이구요 직업은 ${user.job}에요`)
//     console.log('------------------------');
    
    
// });

// filter(): 논리조건에 맞는 데이터를 필터링하여 새 배열로 리턴

const f1 = numbers.filter(n=> n%2 === 0)
console.log(f1);

const f2 = foods.filter( food => food.includes('찌개'))
console.log(f2);

// 회원목록에서 급여가 400만원 이상인 사람들만 필터링
const f3 = userList.filter(user => user.salary >= 4000000)
console.log(f3);

// map(): 배열에서 특정 데이터들을 추출해서 새로운 배열에 저장
/*
  filter => 10개의 데이터를 필터링하면 개수가 줄어듬
           ex) 10명의 회원중 서울사는 사람들만 필터링 -> 3명 남음
  map => 10개의 데이터를 매핑하면 개수가 그대로 10개
           ex) 10명의 회원중 각 회원의 주소만 매핑
*/

const m1 = numbers.map(n => n ** 2);
console.log(m1);

const m2 = foods.map(food => food[0] + food[1] + '**');
console.log(m2);

// 회원목록에서 회원들의 이름만 매핑
const m3 = userList.map(user => user.userName);
console.log(m3);

console.log('=======================');

// numbers에서 숫자들을 추출해서 li태그로 매핑
const liList = numbers.map(n => `<li>${n}</li>`);
console.log(liList);

console.log('=====================');

// 회원목록에서 급여가 500만원 이상이면서 나이가 30대인 회원의
// 이름과 직업과 급여와 나이만 추출

const mappedArray = userList
  .filter((user) => user.salary >= 5000000 && user.age >= 30 && user.age < 40)
  .map((user) => ({
    name: user.userName,
    job: user.job,
    salary: user.salary,
    age: user.age,
  }));

console.log(mappedArray);



/*
const newArray = [];

for (const user of userList) {
  if (user.salary >= 5000000
    && (user.age >= 30 && user.age < 40)
  ) {
    newArray.push(user);
  }
}

const mappedArray = [];
for (const user of newArray) {
  const obj = {
    name: user.userName,
    job: user.job,
    salary: user.salary,
    age: user.age 
  };
  mappedArray.push(obj);
}

console.log(mappedArray);
*/



// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

const totalByCity = {};

// 서울 거래 총액 구하기
let totalInSeoul = 0;
let totalInDaejeon = 0;
let totalInBusan = 0;
for (const trs of traders) {
  if (trs.trader.city === '서울') {
    totalInSeoul += trs.value;
  } else if (trs.trader.city === '부산') {
    totalInBusan += trs.value;
  } else if (trs.trader.city === '대전') {
    totalInDaejeon += trs.value;
  }
}

totalByCity['서울'] = totalInSeoul;
totalByCity['대전'] = totalInDaejeon;
totalByCity['부산'] = totalInBusan;

console.log(totalByCity);


// 결과 집합을 생성
const totalByCity = {};

 for (const trs of traders) {
   const city = trs.trader.city;
  // 도시이름은 city에 저장되어 있고 도시 이름이 객체의 키가되어야 함
  // 조건에 따라 처음 등장한 도시는 객체에 추가하고
  // 처음 등장한 도시의 거래금액은 그대로 저장
  // 이미 한번 등장했던 도시는 객체에 추가되는 것이 아니라
  // 거래금액을 수정해야 함.

  // dog = { age: 3 }  ->   dog.age => 3 // dog.name => undefined
  if (totalByCity[city] === undefined) { // 이 도시는 아직 저장되지 않음
    totalByCity[city] = trs.value;
  } else { // 이미 저장이 된 도시
    totalByCity[city] += trs.value;
  }
}
console.log(totalByCity);