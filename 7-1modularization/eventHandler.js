import {$text} from "./gotDOM"

// 클릭함수
function clickHandler (e){
    console.log(click);
    $text.textContent = '안뇽'; 
    
}

export { clickHandler }