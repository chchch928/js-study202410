
for(let i = 0; i < 3; i++){
    for (let j = 0; j < 2; j++){
        console.log(`hello${i}-${j}`);
    }
}
// 3*2 = 6번 -> hello가 6번 출력



// 구구단 

for(let level =2 ; level <=9 ;level++){
console.log(`=========구구단 ${level}단=========`);



for (let line = 1; line <=9; line ++){
    console.log(`${level} X ${line} =${level *line}`);
}
}