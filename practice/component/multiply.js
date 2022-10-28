// length가 2인 배열(array)을 입력 받아
// array[0]의 각 자릿수를 모두 곱하고, array[1]의 각 자릿수를 모두 곱하여
// array[0]과 array[1] 중 큰 수를 return 하는 방법

function multiply1(arr) {
  let left = arr[0];
  let right = arr[1];
  let multiLeft = 1;
  let multiRight = 1;

  do {
    multiLeft *= left % 10;
    left = parseInt((left /= 10));
  } while (left > 0);

  do {
    multiRight *= right % 10;
    right = parseInt((right /= 10));
  } while (right > 0);

  return multiLeft > multiRight ? arr[0] : arr[1];
}

function multiply2(arr) {
  let left = arr[0].toString().split("");
  let right = arr[1].toString().split("");
  let multiLeft = 1;
  let multiRight = 1;

  let leftArr = left.map((x) => parseInt(x));
  multiLeft = leftArr.reduce((acc, cur) => acc * cur, 1);

  let rightArr = right.map((x) => parseInt(x));
  multiRight = rightArr.reduce((acc, cur) => acc * cur, 1);

  return multiLeft > multiRight ? arr[0] : arr[1];
}
