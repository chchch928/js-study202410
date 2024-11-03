let members = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while(true){
let menu = prompt(`현재멤버 : [${members}] \n 메뉴를 선택하세요 
 1. 새로운 이름 추가 \n 2. 기존 이름 삭제 \n 3. 프로그램 종료`);
if (menu === "1") {
  let add_member = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
  members.push(add_member);
  alert(`${add_member}이(가) 추가되었습니다.`);
} else if (menu === "2") 
  { while (true) {
    let del_member = prompt(`삭제할 멤버의 이름을 입력하세요.`);
    let del_idx = members.indexOf(del_member);
    if (del_idx === -1) {
      alert(`${del_member}는 잘못된 이름입니다. \n 다시 입력하세요`);
    } else {
      members.splice(del_idx, 1);
      alert(`${del_member}는 삭제되었습니다`);
      break;
    }
  }

  } else if (menu === "3"){
    alert(`프로그램 종료하기`);
    break;
  }else{
    alert(`메뉴를 잘못 입력했습니다.`)
  }
}


