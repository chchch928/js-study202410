const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];

// 회원 목록에서 회원의 직업만 추출해서 새 배열로 리턴
// [추노,과일,발렛파킹,게이머]

// 회원목록에서 회원의 주소만 추출해서 새 배열로 리턴
// [ 서울, 서울 ,경기, 서울]

// 회원목록에서 회원의 두번째 취미만 추출해서 새 배열로 리턴
// [축구,테니스,축구,테니스]

// 하나의 함수로 위의 모든것을 처리할 수 있도록 구현

function mapByUserJob() {
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(user.job);
  }
  return mappedArray;
}

const map1 = mapByUserJob();
console.log(map1);

console.log("==========================");

function mapByUserAddress() {
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(user.address);
  }
  return mappedArray;
}
const map2 = mapByUserAddress();
console.log(map2);

console.log("==========================");

function SecondHobby() {
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(user.hobbys[1]);
  }
  return mappedArray;
}
const map3 = SecondHobby();
console.log(map3);

console.log("=============================================");

// 하나의 함수로 위의 모든 것을 처리할 수 있도록 구현
// 특정배열에서 특정데이터들을 추출해서 새 배열로 만들거야

function map(callback) {
  //callback: 니가 추출하고 싶은거 보내줘
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

const m1 = map(function (user) {
  return user.job;
});
console.log(m1);

//const m1 = map(user => user.job);
//console.log(m1);

const m2 = map(function (user) {
  return user.address;
});
console.log(m2);

//const m2 = map(user => user.address);
//console.log(m2);

const m3 = map(function (user) {
  return user.hobbys[1];
});
console.log(m3);

//const m3 = map(user => user.hobbys[1]);
//console.log(m3);

// 회원목록에서 이름이랑 직업만 추출하고 싶어
const m4 = map(function (user) {
  const newObj = {
    userName: user.userName,
    job: user.job,
  };
  return newObj;
});

// const m4 = map(user => ({ userName: user.userName, job: user.job }));

console.log(m4); // [ {이름, 직업}, {}, {}, {} ]
