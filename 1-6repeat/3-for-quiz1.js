


let num1 = +prompt('양의 정수를 입력하세요')
let result ='';
for(let i = 2; i<=num1; i*=2){
  result += `${i}`;
}
alert(result)