// 클로저 이해하기

let one;
one = 1;
function addOne(num) {
  console.log(one + num);
}

addOne(5);
