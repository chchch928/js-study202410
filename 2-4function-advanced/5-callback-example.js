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

// 회원목록에서 취미가 딱 2개인 사람들만 추출해서
// 새 배열에 담아서 반환해주는 함수를 만드세요

//   function filterByHas2hobbies(){
//     // 새 배열 생성
//     const filteredArray = [];
//     for( const user of userList){
//         if (user.hobbys.length === 2){
//             filteredArray.push(user)

//             }
//         }
//         return filteredArray
//     }

// 회원목록에서 서울사는 사람들만 새 배열에 담아 리턴해줘

// function filterByUserLiveInSeoul(){
//     const filteredArray = [];
//     for( const user of userList){
//         if (user.address === '서울'){
//             filteredArray.push(user)

//             }
//         }
//         return filteredArray
//     }

// const newArray2 = filterByUserLiveInSeoul()
// console.log(newArray2);

// 회원목록에서 경기사는 사람들만 새배열에 담아 리턴해줘

// function filterByUserLiveInRegion(region){
//     const filteredArray = [];
//     for( const user of userList){
//         if (user.address === region){
//             filteredArray.push(user)

//             }
//         }
//         return filteredArray
//     }

// const newArray3 = filterByUserLiveInRegion('경기')
// console.log(newArray3);

console.log("=================================================");

// 회원목록에서 특정조건을 만족하는 회원들을 필터링
function filter(condition) {
  const filteredArray = [];
  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 취미가 4개인 사람을 필터링

const filter1 = filter(function (user) {
  return user.hobbys.length === 4;
});
console.log(filter1);

const filter2 = filter(function (user) {
  return user.userName.includes("왕") && user.hobbys.length === 2;
});
console.log(filter2);

// 서울 살면서 이름이 8글자인 사람
const filter3 = filter(
  (user) => user.address === "서울" && user.userName.length === 8
);
console.log(filter3);
