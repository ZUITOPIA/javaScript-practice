// 클로저 이해하기
// Javascript 는 Lexical Environment

let one;
one = 1;
function addOne(num) {
  console.log(one + num);
}

addOne(5);

// 전역 Lexical Environment => one:1 과 add:function
// 내부 Lexical Environment => num:5
