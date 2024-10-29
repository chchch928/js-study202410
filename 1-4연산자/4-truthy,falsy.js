
// truthy ,falsy :js는 논리가 아닌 데이터를 논리로 표현할 수 있다.
// 0 ,'',null ,NaN ,Undefined는 false로 취급한다 나머지는 전부 true
if(true) console.log('참입니다1');
if(false) console.log('참입니다1');
if(0) console.log('참입니다2');
if(100) console.log('참입니다2');
if(-99) console.log('참입니다3');

// 다 출력X
if (null) console.log('참입니다4');
if ('') console.log('참입니다4');
if (undefined) console.log('참입니다4');

// 안에 공백이 있으면 출력
if (' ') console.log('참입니다5');