// ============전역변수 영역===============//
const $numbers = document.getElementById('numbers');
const $up =document.getElementById('up')
const $down =document.getElementById('down')
const $finish = document.getElementById('finish')


let answernum = Math.floor(Math.random()*100)+1
console.log(`랜덤숫자 : ${answernum}`);




for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("icon");
    numberDiv.textContent = i;
    $numbers.appendChild(numberDiv);

}



// =========이벤트 등록 ===============//
$numbers.addEventListener("click",function(e){ 
    const clicknum = e.target.textContent; // 내가 클릭한 숫자 꺼내오기 위해서 필요한 과정
    if(clicknum>answernum){ // down인 경우
        $numbers.innerHTML =""
        for(i=1;i<=clicknum;i++){
            const numberDiv = document.createElement("div");
            numberDiv.classList.add("icon");
            numberDiv.textContent = i;
            $numbers.appendChild(numberDiv);

        }



    }
    else { // up인 경우
        $numbers.innerHTML =""
        for(i=clicknum;i<=100;i++){
            const numberDiv = document.createElement("div");
            numberDiv.classList.add("icon");
            numberDiv.textContent = i;
            $numbers.appendChild(numberDiv);

            
        }

    }
  
})
