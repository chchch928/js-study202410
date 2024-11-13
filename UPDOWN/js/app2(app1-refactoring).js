
//========== 전역 변수, 상수 영역 ==========//
const CLASS_SELECTED = 'selected'; // up down 애니메이션 효과 클래스 이렇게 상수로 만들어 놓으면 오타잡기가 좋다

const gameData = {
  secret:Math.floor(Math.random() * 100) + 1,
  userAnswer:null, 
   min : 1,
   max : 100
}

//========== DOM 가져오기 영역 ==========//
// 아이콘이 들어갈 컨테이너
const $numbers = document.getElementById('numbers');
const [$up, $down] = [...document.querySelector('.result').children];
const $finish = document.getElementById('finish');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');

// 아이콘 1개를 렌더링하는 함수
function createRenderIcon(number){
  const $div = document.createElement('div');
  $div.classList.add('icon');
  $div.textContent = number; // 혼자서 활용할 ㅜ수 없으므로 

  $numbers.append($div);

}
// 숫자 아이콘을 생성하는 함수
function makeNewicons(){
  const{min,max} = gameData;
    // 기존 아이콘들을 모두 제거
    $numbers.innerHTML =''
for (let i = min; i <= max; i++) {
  createRenderIcon(i)
}
}

// 정답일 경우 처리할 내용
function handleCorrectAnswer($clickedIcon){
  $finish.classList.add('show');
    $clickedIcon.setAttribute('id', 'move');
}

// 정답이 아닐 경우 처리할 내용
// @param1 -isUP: up인 경우 true down일 경우 false
function handleWrongAnswer(isUP){

  document.getElementById(isUP ?  'up':'down').classList.add(CLASS_SELECTED)
  document.getElementById(isUP ?  'down':'up').classList.remove(CLASS_SELECTED)

  if (!isUP) { // down인 경우
   
    gameData.max = gameData.userAnswer - 1;
    $end.textContent = gameData.max;

    
  } else { // up인 경우
  gameData.min = gameData.userAnswer + 1;
    $begin.textContent = gameData.min;

    makeNewicons();
  }
}

// 정답을 판별하는 함수
function verifyAnswer($clickedIcon){ // 함수이름 잡고 ctrl누르면 입력한곳으로 이동
  const {secret, userAnswer} = gameData // 이건 왜 쓰인지 궁금
  if (secret === userAnswer) {
    handleCorrectAnswer($clickedIcon)
  }else{ // 정답이 아닌 경우
    handleWrongAnswer(secret > userAnswer)
  }
}

//=========실행영역==========//
// 게임 첫 시작시 단한번 호출하여 100를 그려놓는 용도
makeNewicons();

// 아이콘 클릭 이벤트 등록
$numbers.addEventListener('click', e => {
  if (!e.target.matches('.icon')) {
    return;
  }
  
  gameData.userAnswer = +e.target.textContent;  

  verifyAnswer(e.target);

});