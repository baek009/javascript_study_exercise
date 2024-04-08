# 3. 데이터형(Data Type)

- number : 숫자
- string : 문자
- booleen : true/false
- null
- underfined
- bigint
- object
- symbol

## 3.1 숫자 number

```js
const a = 3; // 정수(integer)
const b = 5.7; // 부동 소수점 숫자 (floating point number)
const c = 123e3; // 123000
const d = 123e-3; // 0.123

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

## Bigint

- 정수는 15개의 숫자, 15자리 정수까지 나타낼수 있다.
- 그 이상의 정수를 사용하려면 Binint 형 사용해야한다.

```js
const e = 9999999999999998765n;
console.log(e);
```

## 문자열 string

```js
// 문자열
const text1 = "사 과"; // 큰 따옴표 사용
console.log("text1에 저장된 내용: ", text1);

// 문자열의 Length 프로퍼티 사용, 공백도 포함
console.log("text1의 문자열 길이는" + " " + text1.length + "입니다.");

// 템플릿 문자열 ``

let username = "홍길동";
let age = 30;

let text2 = "이름:" + username + "나이:" + age;
console.log(text2);

let text3 = `이름: ${username}, 나이: ${age}`;
console.log(text3);
```

## boolean

```js
let x = 5 > 3; // true
let y = 5 < 3; // false

console.log(x);
console.log(y);
```

## undefined, null(빈 문자열)

```js
let x;
let y = "";

console.log(x);
console.log(typeof y);
```

## 객체 object

```js
const member = {
  id: "kdhong",
  name: "홍길동",
  age: 20,
};

console.log("아이디: ", member.id);
console.log(member.age);
console.log(member.name);

console.log("아이디: ", member.id);
console.log(member.age);
console.log(member.name);
```
