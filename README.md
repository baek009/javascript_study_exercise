# 8. for 문

## 8.1 for 문

- 특정 코드를 반복해서 실행 for, while, do while

```txt
for(초기값; 조건식; 증가_감소;){
  문장;
  ...
}
```

```js
// for의 조건식이 참인 동안 문장들을 반복실행
// 1. i의 값을 1로 초기화
// 2. 조건식 1 <= 3 참, 1출력
// 3. i의 값이 1 증가
// 4. i의 값이 2가 됨
// 5. 조건식 2 <= 3 참, 2 출력
// 6. i의 값이 1 증가
// 7. i의 값이 3이 됨
// 8. 조건식 3 <= 3창, 3 출력
// 9. i의 값이 1 증가
// 10. i의 값이 4가 됨
// 11. 조건식 4 <=  3 거짓, for 루프를 빠져나감

for (let i = 1; i <= 3; i++) {
  console.log(1);
}

// for 문을 이용해서 1 ~ 10 정수의 합계를 구하는 프로그램
let sum = 0;
// i가 1에서 100까지 값을 가지는 동안
for (let i =1; i <=100; 1++) {
  // 문장이 반복 실행되며, 변수 sum에 1 ~ 100의 누적 합계를 저장
  sum += i;
}
// sum의 값을 출력
console.log(sum);

// for문, 배열, 템플릿 문자열 이용하여 웹페이지 글자에 색을 설정
const color =["red", "green", "blue", "pink"];
let text = "";

// i는 0, 1, 2, 3의 값을 가지는 동안
for (let i = 0; i <=3; i++) {
  text += `<span style="color: ${color[i]}">안녕</span>`;
}
console.log(text);
document.write(text);

  // 템플릿 문자열을 이용
  //
```

## 8.2 for in 문

- 객체의 요소들을 반복해서 읽어올 때 for in

```js
// 객체 내 각 요소들을 반복해서 읽어와
// 그 키를 변수에 저장하는 식으로
// 반복 루프가 진행
for(변수 in 객체){
  문장;
  ...
}
```

```js
const member = { id: "kdhong", username: "홍길동", age: 30 };

// 객체의 요소 수 만큼, 즉 세번 반복 루프 진행
for (let x in member) {
  console.log(member[x]);
}
```

````

## 8.3 for of 문
```js
for()
```
```


```js
const member = { id: "kdhong", username: "홍길동", age: 30 };

// 객체의 요소 수 만큼, 즉 세번 반복 루프 진행
for (let x in member) {
  console.log(member[x]);
}
```
````

# 10.5 클로저(clusure)

-전역 변수는 어디서나 값이 변경될 수 있기 때문에 보안에 취약하고 예기치 못한 오류를 발생시킬 가능성이 있다. -클로저는 전역 변수가 아닌 변수를 전역 변수와 같은 방식으로 동작하지만, 그 값을 함부로
변경할 수 없도록 변수를 "사유화" 할 수 있는 방법을 제공

-클로저는 함수와 그 함수가 선언 될떄의 렉시컬 환경과의 조합이다.

```js
// 카운터 값 count를 createCounter 함수의 지역변수로 설정
const createCounter = () => {
  let count = 0; // 카운터의 카운트 초기 값 설정
  console.log(count);

  // handleIncrement 함수는 count 변수에 접근하고 수정할 수 있다.
  // 이 함수는 클로저이며, createCounter 함수의 지역변수인 count를 기억한다.
  const handleIncrement = () => {
    console.log(count);
    count += 1; // 현재 카운트 값을 1증가
    // 화면에 새로운 카운트 값을 업데이트
    document.getElementById("show").innerHTML = count;
  };

  // 클로저인 handleIncrement 함수를 반환한다.
  // 이 함수는 외부에서 호출될 수 있으며,
  // createCounter의 count 변수에 계속해서 접근할 수 있다.
  return handleIncrement;
};

const icrement = createCounter();
```

- 리액트에서 클로저를 활용한 카운터 컴포넌트

```js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // 클릭 이벤트가 발생할 때마다 handleIncrement함수가 실행 된다.
    // 이 함수는 setCount를 호출하여 현재 count상태를 업데이트 하는데
    // 여기서 prevCount => prevCount + 1이라는 업데이트 함수를 사용한다.
    // 이 함수는 현재 상태값을 인자로 받아 새로운 상태값을 반환 하는데
    // 이 과정에서 클로저를 통해 prevCount의 최신 상태를 참조하고 있다.
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
};

export default Counter;
```

# 10.6 예외 처리 (exception handling)

- 코드 실행중 예기치 못한 오류가 발생 했을때 코드의 흐름을 복구하는 기능

## 10.6.1 try ~ catch 문

## 10.6.2 try ~ catch ~ finally 문

```js

<body>
  <button type="button" onclick="changeColor()">색상 변경</button>
  <div
    id="box"
    style="width: 100px; height: 100px; background-color: green; color: white"
  ></div>

  <script>
    let box = document.getElementById("box");

    const change = (function () {
      let toggle = false;
      return function () {
        toggle = !toggle;
        box.style.backgroundColor = toggle ? "blue" : "red";
        box.innerHTML = toggle ? "파란색" : "빨간색";
      };
    })();

    function changeColor() {
      change();
    }
  </script>
</body>
```

```js
const checkinput = () => {
  let input_elem = document.getElementById("input1");
  let a = input_elem.value;
  document.getElementById("show").innerHTML = "";
  try {
    if (a === "") {
      throw "비어 있습니다.";
    }
    if (isNaN(a)) {
      throw "숫자가 아닙니다.";
    }
    a = Number(a);
    if (a < 0 || a > 9) {
      throw "0~9 사이 숫자가 아닙니다.";
    }
  } catch (error) {
    document.getElementById("show").innerHTML = `오류: ${error}`;
  } finally {
    input_elem.value = "";
  }
};
```
