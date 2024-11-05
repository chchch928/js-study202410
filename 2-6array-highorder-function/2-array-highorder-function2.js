const nums = [10,20,30,40,50,60,70,80];

// 숫자 배열에서 홀수번째 데이터만 필터링해서
// 해당 수에 50을 더해서 매핑

const filteredNums = nums.filter((n,i)=>{
    if ( i%2 === 0){
        return n;
    }
})

// console.log(filteredNums);

const mappedArray = filteredNums.map(n => n+ 50)
console.log(mappedArray);


