/*
    # v1.0 요구사항
    시스템은 1~10사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다. 

     # v1.1 요구사항

    종료시점에 시스템은 정답횟수와 오답횟수를 출력한다.
*/

let answercount = 0
let wrongcount = 0

while(true){
    let num1 =  Math.floor(Math.random() * 10) + 1
    let num2 =  Math.floor(Math.random() * 10) + 1
    let realAnswer = num1+num2
    let userAnswer = +prompt(`${num1}+${num2}=??`)
    
if(userAnswer===0){
    alert(`게임을 종료합니다.`)
    alert(`#정답횟수: ${answercount}회, 틀린횟수: ${wrongcount}회`)
    break;

}
else if( userAnswer === realAnswer){
    alert(`정답입니다`);
    answercount ++;
}
else{
    alert(`오답입니다.`)
    wrongcount ++;
}

}
