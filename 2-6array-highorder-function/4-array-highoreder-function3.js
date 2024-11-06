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

  // findIndex(): 해당조건에 맞는 처음 발견한 객체데이터의 인덱스를 찾는 것
  // ex) 이름이 주차왕인 객체의 인덱스는 몇번인가?
  // [1,2,3,4] || ['a','b','c']

// function findIndex(callbackFN){
//     for (let i=0; i <userList.length; i++){
//         if(callbackFN(userList[i])){
//             return i;
//         }
//     }
//     return -1;
// }
  
const idx2 =userList.findIndex((user)=>user.job ==='과일');
console.log(`idx2:${idx2}`);

// find() : 배열에서 조건에 일치하는 처음 발견한 객체를 리턴 
// 중복이 없는 데이터로 찾아야 정확하게 찾아냄

// 이름이 빠나나인 객체를 찾아주세요

// function myFind(callbackFN){
//     for (const user of userList){
//         if(callbackFN(user)){
//             return user;
//         }
//     }
//     return null;
// }
 function myFind(callbackFN){
     const index = findIndex(callbackFN);
     return index !== -1 ? userList[index]: null;
 }
  



const foundUser = userList.find(user => user.userName === '빠나나')
console.log(foundUser.job);

console.log('==============================');

// some() : 배열에서 특정조건에 맞는 데이터가 하나라도 있는지 야부
// every() : 배열에서 모든 데이터가 특정 조건에 맞는지 체크

function mySome(callbackFN){
    for(const user of userList){
        if(callbackFN(user)){
            return true;
        }
    }
    return false
}
function myEvery(callbackFN){
    for(const user of userList){
        if(!callbackFN(user)){
            return false;
        }
    }
    return true;
}



// 급여가 500만원 이상인 회원이 하나라도 있는가? 
const flag1= userList.some(user => user.salary >= 5000000);
console.log(`flag1:${flag1}`);

// 모든 회원들이 서울에 삽니까?
const flag2= userList.every(user => user.address === '서울');
console.log(`flag2:${flag2}`);