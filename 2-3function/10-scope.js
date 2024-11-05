
// 전역 스코프: 프로그램 밖에서도 사용가능한 변수
let i=3 ;

// 블록 스코프: 블록안에서 let, const로 선언한 변수는 블록밖에서 사라진다.
for (let i=0;i<3;i++){
    console.log(`i:${i}`);
    
}
console.log(`outer i : ${i}`);


let n = 'hello'

if (true){
    let n= 10; // n=10 과 n=20 모두 주석 처리시 전역변수인 hello가 출력
    if (true) {
        let n =20; // 주석처리시, outer inner 모두 n = 10 
        console.log(`inner n : ${n}`);

    }  // end inner if
    console.log(`outer n : ${n}`);
    
} // end outer if

// 지역스코프 (local scope): 함수 내에서 변수가 생성되고 소멸
function foo (){
    let x  ='홍길동'
    console.log(`local: ${x}`);
    return x;
}

let x =foo()
console.log(`global x:${x}`);


// 최대한 전역스코프 사용을 자제하라
// 1. 변수이름 충돌 문제
// 2. 전역변수는 프로그램 종료시까지 메모리에 남아있으므로 비효율적
// 3. 스코프체인이 너무 길다

