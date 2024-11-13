 
  // return: 함수의 반환값 - 함수가 생성한 결과를 함수밖으로 가져가는 것

  function add(n1,n2){
    let result = n1 + n2;
    console.log(`result : ${result}`);
    return result;
  }

  function multiply(n1,n2){
    console.log(`${n1}x${n2} = ${n1*n2}`);
    
  }

// 리턴이 있는 함수는 함수실행 후의 결과를 다른변수에 저장가능

let r1 = add (2, 4);
let r2 = add (5, 2); 

  console.log(r1 ** 2);

  // 리턴이 없는 함수는 undefined로 돌아온다 
  // 즉 변수에 담으면 안된다

  let r3 = multiply(3,2)
  console.log(r3+100);
  
  console.log('=============================');
let r4 = add(add(4,6), add(5,15)) * add(3,add(1,2)); // 안쪽부터 실행되고 안쪽에 여러개가 있으면 왼쪽부터 실행
console.log(`r4: ${r4}`); // 문법적으로 문제는 없으나 좋은 코딩이라고 볼 수는 없다 


let arr =[1,2,3,4];

let xx= arr.push(5,6,10,20);
console.log(`xx:${xx}`);

let yyy =console.log('hello');
console.log(`yyy:${yyy}`);


