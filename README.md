# 1. html에 script 써보기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트 스터디</title>
  </head>
  <body>
    <p id="show"></p>
    <script>
      document.getElementById("show").innerHTML = 10 + 20;
    </script>
  </body>
</html>
```

## 1.1 데이터 출력

- innerHTML : 브라우저 안에 있는 HTML 요소에 데이터 출력
- document.write() : 브라우저에 간단한 데이터 출력
- alert() : 알림창에 데이터 출력
- console.log() : 브라우저 콘솔에 데이터 출력

### 1.1.1 innerHTML

### 1.1.2 document.write()

```js

```

### 1.1.3 alert()

`js`

 <p id="show"></p>
    <script>
      alert(10 + 20);
    </script>```

### 1.1.4 console.log()

- 브라우저 개발자 도구 console에 출력

````js
<script>
      console.log(10 + 20);
    </script>
    ```
````

# 2. variable(변수)

- 데이터가 컴퓨터 메모리에 저장되는 주소

# 2.1 변수 선언

- var, let, const 키워드
- const
