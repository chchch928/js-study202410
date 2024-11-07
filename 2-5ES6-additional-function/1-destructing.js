
const userNames = ['김철수','홍길동','고구마']

// 배열에 들어있는 데이터를 다시 각각의 변수에 저장하고 싶음

// const kim = userNames[0];
// const hong =userNames[1];
// const go = userNames[2];

const [kim, hong, go] = userNames;

console.log(`kim:${kim},hong: ${hong},go:${go}`);


// 나는 1번인덱스 말고 0번인덱스와 2번만 추출하고 싶어 
const[kk,gg] = userNames
console.log(`kk:${kk},gg:${gg}`);

const exArr = [[],( )=> {}]

const [numbers,foo] = exArr;
numbers[1];
foo();

let first =10 , second =20;

// first를 second의 값으로 second를 first의 값으로 변경하고 싶다면
[first,second]=[second,first]
console.log(`first: ${first},second: ${second}`);


// 맨 앞 2개의 숫자만 각각의 변수에 저장하고
// 나머지는 다시한번 배열로 묶어서 보관하고 싶다.

const nums = [1, 3, 5, 7, 9, 11]

// const numsCopy = nums.slice()
// const one = numsCopy.shift();
// const three = numsCopy.shift()

const [one , three, ...numsCopy] = nums

console.log(`one:${one}`);
console.log(`three:${three}`);
console.log(`others:`, numsCopy);

// 스프레드를 통한 배열 합치기
const foods = ['햄버거','콜라','감자튀김']
const fruits =['오렌지','자몽','레몬']

const newFoods = [...foods,...fruits]
// ...을 넣지 않을 경우 따로 따로 출력됨
console.log(newFoods);
console.log(newFoods.length);

console.log(foods);
const newFruits = [...fruits];
newFruits[1] = '포도';
console.log(newFruits);
console.log(fruits);

const myFavoriteFoods = ['족발',...foods, '닭강정','피자']
console.log(myFavoriteFoods);


