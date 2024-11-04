
// 특정 숫자를 입력받고 1부터 해당숫자까지 범위의
// 2의 제곱수를 가로로 출력

let n = +prompt(`양의 정수를 입력하세요`)

let resultText ='';
for (i=2; i<=n; i *=2 ){
  resultText += `${i}`;

}
alert(resultText);
