# 6. if문

## 6.1 if ~ 구문

- 참,거짓에 따라 특정 코드의 실행을 제어

```txt
if(조건식){
  문장;
  ...
}
```

```js
let x = 1000; // 입장료 10000원
let age = 70;

if (age >= 65) {
  // 입장료: 0원
  x = 0;
}
console.log(`입장료: ${x}원`);

// 웹사이트 관리자 아이디(id)가 admin이거나 Level이 1인 경우라고 가정
// 관리자일 경우 "관리자입니다."라고 출력
let id = "admin";
let Level = 5;

if (id === "admin" || level === 1) {
  console.log("관리자입니다.");
}

// 필기시험 성적과 실기시험 성적 모두 80이상 합격
let score1 = 95; // 필기
let score2 = 80; // 실기

if (score1 >= 80 && score2 >= 80) {
  console.log("합격입니다.");
}
```

## 6.2 if ~ else ~ 구문

```txt
if(조건식){
  문장;
  ...
} else {

}
```

```js
let num = 9;

if (num % 2 == 0) {
  console.log(`${num}은(는) 짝수입니다.`);
} else {
  console.log(`${num}은(는) 홀수입니다.`);
}

// 70점 이상이면 합격, 그렇지 않으면 불합격
let score = 65;
let result = "";

if (score >= 70) {
  result = "합격";
} else {
  result = "불합격";
}
console.log(result);
```

## 6.2 if ~ else if ~ else 구문

```txt
let num = 9;

if (num % 2 == 0) {
  console.log(`${num}은(는) 짝수입니다.`);
} else {
  console.log(`${num}은(는) 홀수입니다.`);
}

// 70점 이상이면 합격, 그렇지 않으면 불합격
let score = 65;
let result = "";

if (score >= 70) {
  result = "합격";
} else if(){
  result = "불합격";
} else{
  result = "불합격";
}
console.log(result);
```

##
