// 구조분해할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열구조분해
// e.g.
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

// e.g.
let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
console.log(user1); // "Mike"
console.log(user2); // "Tom"
console.log(user3); // "Jane"

// e.g.
let str = "Mike-Tom-Jane";
let [userA, userB, userC] = str.split("-");
console.log(userA); // "Mike"
console.log(userB); // "Tom"
console.log(userC); // "Jane"

// e.g. 기본값은 undefined
let [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

// e.g. 기본값 설정 가능
let [first = 3, second = 4, third = 5] = [1, 2];
console.log(first); // 1
console.log(second); // 2
console.log(third); // 5

// e.g. 배열구조분해 : 일부 반환값 무시
let [useR1, , useR2] = ["Mike", "Tom", "Jane", "Tony"];
console.log(useR1); // "Mike"
console.log(useR2); // "Jane"

// e.g. 배열구조분해 : 값 바꾸기
let firstNumber = 1;
let secondNumber = 2;
let emptyNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = emptyNumber;

// 객체구조분해
// e.g.
let user = { name: "Mike", age: 30 };
let { name, age } = user; // 아래 두 줄과 같음. name과 age 순서 상관 X
// let name = user.name
// let age = user.age
console.log(name); // "Mike"
console.log(age); // 30

// e.g. 새로운 변수 이름으로 할당
let userZuitopia = { nickname: "zuitopia", hobby: "eating" };
let { nickname, hobby } = userZuitopia; // 기본
let { nickname: userName, hobby: userHobby } = user; // 새로운 변수 이름 할당
console.log(userName); // "zuitopia"
console.log(hobby); // "eating"

// e.g. 기본값은 undefined
let WhoUser = { whoName: "hong", whoAge: 23 };
let { whoName, whoAge, whogender } = WhoUser;
console.log(whoName); // "hong"
console.log(whoAge); // 23
console.log(whogender); // undefined
