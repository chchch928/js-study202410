

//========= 이벤트 핸들러(이벤트가 실행될 때 호출되는 함수) 정의 영역 ========//
function todoInsertHandler(e) {
    // form안에 있는 버튼은 기본적으로 서버에 정보를 제출한다.
    // 그래서 자동 새로고침이 일어나기 때문에 이를 방지해야 함
    e.preventDefault();
    // console.log('add clicked!');
  
    // 1. 입력한 텍스트를 읽어옴
    const inputText = $todoTextInput.value;
    // 2. 해당 텍스트로 todo객체를 생성해야 함
    const newTodo = {
      id: String(Math.random()),
      text: inputText,
      done: false
    };
    // 3. 생성된 객체를 todos배열에 추가
    globalObject.todos.push(newTodo);
    
    // 4. 배열을 리렌더링
    renderTodos();
  
    // 5. 후속 처리 (인풋 입력값 비우기)
    $todoTextInput.value = '';
  }
  