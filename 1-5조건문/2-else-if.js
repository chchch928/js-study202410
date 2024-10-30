
let age = 4;

if (age >19){
    console.log('성인입니다.');
}
//19이상이 아니고 17세 이상이면 고등학생
else if(age >= 17){
    console.log('고등학생입니다.');
}
else if(age >= 14){
    console.log('중학생입니다.');
}
else if(age >= 8){
    console.log('초등학생입니다.');
}
// 위 조건이 다 아니면 미취학 아동
else {
    console.log('미취학 아동입니다.');
}
