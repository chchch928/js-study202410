
// 클로저를 통해 지역변수의 수명을 늘려줄 수 있다.
function increaseClosure(){
    let count = 0; 

    function increaseCount(){
        return ++count;
    }
    return increaseCount;
}

// 취미의 개수를 세야함
const increaseHobbyCount = increaseClosure();

console.log(' ======= 취미 개수 세기=======');
console.log(increaseHobbyCount()); // 1
console.log(increaseHobbyCount()); // 2
console.log(increaseHobbyCount()); // 3

console.log('===========사람 수 세기=======');

const increaseHumanCount = increaseClosure();
console.log(increaseHumanCount()); // 1
console.log(increaseHumanCount()); // 2
console.log(increaseHumanCount()); // 3
console.log(increaseHumanCount()); // 4




