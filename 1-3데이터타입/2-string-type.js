
// 문자열로 변수이름 만들때는 ""혹은 ''로 묶어줘야한다 ('' 사용을 권유)
let myName = "김철수";
console.log(myName);
console.log(typeof myName);

myName ='박영희';
console.log(typeof myName);

//2015년 이후 자바스크립트 ES6+
//2015년 이전 자바스크립트 ES5
myName ='둘리'; 
console.log(typeof myName);

let htmlTag= '<ul>\n\t<li>사과</li>\n\t<li>바나나</li>\n</ul>'

// let htmlTag =`
// <ul>
// <li>사과과</li>
// <li>나나나</li>
// </ul>
// `

console.log(htmlTag)

//x월x일은 xxx날입니다.
let month =1;
let day =1;
let anniversary = '신정';

let sentence = `${month}월${day}일은 ${anniversary}입니다.`;
console.log(sentence)