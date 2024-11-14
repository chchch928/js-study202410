
// 일급 함수: 함수를 값으로 표현하여 다른 함수에 전달하거나 
//            함수의 리턴으로 함수를 보낼 수 있는 케이스

function calculate(){
    console.log('calculate call!');
    // 중첩함수, 핼퍼함수
    function add(n1,n2){
        console.log('add call!');
        
        return n1 + n2;
    }
    return add; // add를 밖으로 내보내서 안이 아닌 바깥에서도 사용할 수 있도록 함
}

// calculate(); // calculate call! 출력
// add(10,20) // 에러 발생

const result = calculate();
console.log(typeof result); // function
// console.log(`result:${result}`); //result:30

const r1 = result(10,20);
console.log(`r1: ${r1}`); // add call! r1:30

console.log('====================');

// function foo(){
//     function bar (){
//         return 10;
//     }
//     return bar;
// }
const foo = () => () => 10;

const fas = foo();
const r2 = fas();
console.log(`r2: ${r2}`);

console.log('=======================');

// 카운트를 0부터 1씩 증가시키는 함수 
// function increase(){ // 지역변수를 쓸땐 카운트가 되지 않는다
//     let count = 0;
//     return ++count;
// }
// console.log(increase()); // 1 
// console.log(increase()); // 2로 예상 but, 1출력


let count = 0; // 전역변수를 사용하면 각각 지정해주어야 한다.
function increaseHobbyCount(){ 
    return ++count;
}
// 사람의 수를 1씩 올려주는 함수
function increaseHumanCount(){
    return ++count;
}
console.log(increaseHobbyCount()); // 1
console.log(increaseHumanCount()); // 2
console.log(increaseHobbyCount()); // 3
// 각각 1,1,2 가 출력되어야 하는데 중첩돼서 출력됨





