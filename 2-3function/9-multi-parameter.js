
// 두 수를 전달받아 해당 수의 합을 리턴

function add(n1,n2){
    return n1+ n2;
}
function add3(n1,n2,n3){
    return n1 +n2+ n3;
}


let r1 = add(5,4)
let r2 = add(1,2,3)

// n개의 정수를 전달하면 그 합을 반환 (객체와 배열을 활용 )
function addAll(numbers){
    let total = 0;
    for (let n of numbers){
        total += n;
    }
    return total;
}

let r3 = addAll([10,20,30,40,50]); // n개의 정수일 경우 배열로 
console.log(`r3:${r3}`);

console.log('======================');

//JS ES6+ 스프레드  ...을 사용하면 배열을 묶어주는 것으로 표현해줄 수 있음
// function addAllES6(...numbers){
//     console.log(numbers);

    
// }
// addAllES6(5,8,3);

function addAllES6(...numbers) {
    let total = 0;
    for (let n of numbers) {
      total += n;
    }
    return total;
  }
  
  let r4 = addAllES6(5, 8, 3, 10, 20, 30);
  console.log(`r4: ${r4}`);
  


// n개의 정수중 최소값을 구해서 반환하는 함수
function min(...numbers){
    let cand = numbers[0]
    for ( let i =1; i < numbers.length; i++){
        if (numbers[i]<cand){
             cand = numbers[i]
        }
    }
    return cand;
}
let result4 = min (9,76,-90,-1000, 555, 780, -777);
console.log(`result4: ${result4}`);


//result4에는 -1000이 저장되어야함.