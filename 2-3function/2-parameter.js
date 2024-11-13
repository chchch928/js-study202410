
// 매개변수 (parameter): 함수가 실행할 때 외부에서 전달받는 값

// 언어를 알려주면 그 언어로 인사해주는 함수

function greet(language='한국어'){ // language를 설정하지 않으면 기본값이 한국어이다 (기본값설정)

    console.log(`lang: ${language}`);
    
    switch(language){
        case '한국어':
            console.log('안녕하세요');
            break;
        case '영어':
            console.log('hello');
            break;
        case '일본어':
            console.log('곤니찌와');
            break;
        default:
            console.log('설정된 언어가 아닙니다');
                
    }
}

// 함수에 전달하는 값: 인수 (argument) -> 한국어 일본어 영어 ...
greet('일본어');
greet(); // 기본값이 한국어이므로 한국어케이스 출력
greet('힌두어') // 무언가 값이 있으므로 default값 출력 

console.log('=========================');

// x~y 사이의 랜덤 정수를 생성
function makeRandomInteger(x,y){
    let rn = Math.floor(Math.random()*(y-x+1))+x;
    console.log(`랜덤정수: ${rn}`);
    return rn; // function 밖에서도 사용할 수 있도록
    
}

// 호출 
let rn =makeRandomInteger(1,10);

if(rn === 1){
    console.log(`랜덤정수 1입니다.`);
    
}

// 매개변수 없는 함수
// f(x) = 2
function infiniteHello(){
    for (let i = 0; i <5; i++)
        console.log('hello');
        
} 

for (let i =0; i < 10; i++){
    infiniteHello();
} 
// hello를 50번 반복함