var num = 10 + 20;  //30저장
console.log(num*2);  //60출력
   
var doubleNUM =num *2; //60 저장  
console.log(doubleNUM)  //120 출력

num = 10; //값 10으로 변경
console.log(num*2);

// 변수 선언 (생성)
//var 7freindName; //숫자로 시작하거나 숫자만으로 변수지정 불가
//var my friend name; // 이름 지을때 띄어쓰기 불가능 (언더바사용)
//var my_friend_name; // snake case :SQL,phyton
var myFreindName; //camel case: Java, Java script

//특수문자는 $,_만 사용가능하지만 최대한 쓰지말 것!
var $freindName_;

// 예약어(키워드)는 이름지정 불가능 for,if,catch 등등

var userName; 
console.log(userName);

// 변수의 초기화 (initialized)
userName = '김철수';
console.log(userName);  //김철수

// 변수를 선언하면서 초기화
var address ='서울시';
address ='경기도' // 변수값 수정 (수정시에는 var를 안붙임)