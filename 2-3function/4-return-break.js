
function foo() {
    let a = 10;
    let b = 20;
    return a+b; // retrun은 함수가 끝나는 것이므로 아무리 return아래 함수를 더 정의해도 나오지 않음
}

function callYourName(name){
    let prohibits =['뽀로로','루피','크롱'];
    if(prohibits.includes(name)){
        console.log('그런 이름은 불러줄 수가 없단다');
        return; // break는 반복문이 아니므로 사용할 수 없으므로 return을 대신 사용할 수 있다
        
    }
    console.log(`${name}님 안녕하세요!`);
    
}
callYourName('뽀로로')
callYourName('핑크퐁')

console.log('=========================');

function loop(n) {
    while(true){
        if(n === 0){
            console.log('break!');
            break;
        } else if (n === 1){
            console.log('return!');
            return; 
            
        }
    } // end while
    console.log('end!!');
        
}
loop(0); // break! end!!
loop(1); // return! (end!!가 출력되지않음-> 조금 더 강력함)

// 리턴은 언제나 하나의 값만 반환가능
// f(x) = 2a +3b

console.log('=====================');

// 숫자 2개를 전달하면 해당 숫자의 덧,뺄,곱,나눗셈 결과를 반환

// function operate(n1,n2){
//     let addResult = n1 + n2;
//     let subResult = n1 - n2;
//     let multiResult = n1 * n2;
//     let divResult = n1 / n2;

//     let resultList = [addResult, subResult, multiResult,divResult]
//     return resultList;
// }

// let result = operate(10,5);
// console.log(`덧셈: ${result[0]}`);
// console.log(`뺄셈: ${result[1]}`);
// console.log(`곱셈: ${result[2]}`);
// console.log(`나눗셈: ${result[3]}`);

console.log('======================');
// 배열보다 객체를 사용하는 것이 더 코드를 명확하게 함

// function operate(n1,n2){
//     let addResult = n1 + n2;
//     let subResult = n1 - n2;
//     let multiResult = n1 * n2;
//     let divResult = n1 / n2;

//     let resultList = {
//         addResult:addResult, 
//         subResult:subResult, 
//         multiResult:multiResult,
//         divResult:divResult
//     }
//     return resultList;
// }

// let result = operate(10,5);
// console.log(`덧셈: ${result.addResult}`);
// console.log(`뺄셈: ${result.subResult}`);
// console.log(`곱셈: ${result.multiResult}`);
// console.log(`나눗셈: ${result.divResult}`);


console.log('========================');

// 코드 간소화 

function operate(n1,n2){
  
    return{
        addResult:n1 + n2, 
        subResult: n1- n2, 
        multiResult: n1* n2,
        divResult: n1 /n2
    }
    
}

let result = operate(10,5);
console.log(`덧셈: ${result.addResult}`);
console.log(`뺄셈: ${result.subResult}`);
console.log(`곱셈: ${result.multiResult}`);
console.log(`나눗셈: ${result.divResult}`);