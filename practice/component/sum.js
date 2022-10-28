// length가 2인 배열(array)을 입력 받아
// array[0]의 각 자릿수를 모두 더하고, array[1]의 각 자릿수를 모두 더하여
// array[0]과 array[1] 중 큰 수를 return 하는 방법

function sum1(arr) {
  let left = arr[0];
  let right = arr[1];
  let sumLeft = 0;
  let sumRight = 0;

  do {
    sumLeft += left % 10;
    left = parseInt((left /= 10));
  } while (left > 0);

  do {
    sumRight += right % 10;
    right = parseInt((right /= 10));
  } while (right > 0);

  return sumLeft > sumRight ? arr[0] : arr[1];
}

function sum2(arr) {
  let left = arr[0].toString().split("");
  let right = arr[1].toString().split("");
  let sumLeft = 0;
  let sumRight = 0;

  let leftArr = left.map((x) => parseInt(x));
  sumLeft = leftArr.reduce((acc, cur) => acc + cur, 0);

  let rightArr = right.map((x) => parseInt(x));
  sumRight = rightArr.reduce((acc, cur) => acc + cur, 0);

  return sumLeft > sumRight ? arr[0] : arr[1];
}
