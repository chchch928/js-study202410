
// 일급 함수 
// 함수를 마치 하나의 값처럼 사용하여 
// 변수에 저장하거나 다른 함수에 전달하거나 리턴할 수 있음

function substract(n1,n2){
    return n1 - n2;
}

let orange = substract; // 함수 자체를 orange에 저장
console.log(`orange: ${orange}`); // 함수 substract 그 자체가 출력됨

const grape= orange(30,12); // orange가 substract 함수이기 때문에 
console.log(`grape: ${grape}`); // grape: 8 출력

console.log('===========================');


function printSubstract(x){
    // console.log(typeof x);
    const result = x(10,4);
    console.log(`result: ${result}`);
    
    
}

printSubstract(substract); // x의 타입은 function 

printSubstract((n1,n2) => n1 * n2) // substract는 n1*n2가 되어버림 40 출력

// 함수가 함수를 리턴 
function bar (n1,n2){
    return function (){
        return n1+ n2;
    }
}

const foo = bar(5,8);
console.log(typeof foo); //foo는 function이다.

const goo = foo();
console.log(`goo:${goo}`);
