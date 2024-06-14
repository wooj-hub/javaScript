// const arr = [1, 3, 5, 7, 9];

// //forEach, every, some

// //map(배열 안에 값 바꾸기)
// const a1 = arr.map((v) => v * 10);
// console.log(a1); // 10 30 50 70 90

// const a2 = arr.map((v) => v ** v);
// console.log(a2); // 1,27,125,7의 7승, 9의 9승

// //6보다 작으면 10더하고, 아니면 10곱해주기
// const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));

// //v는 인덱스 값, i는 인덱스 번호
// //짝수번째는 2배, 홀수번째는 3배
// const a4 = arr.map((v, i) => (i % 2 == 0 ? arr[i] * 2 : arr[i] * 3));
// //같은 의미
// const a5 = arr.map((v, i) => (i % 2 == 0 ? v * 2 : v * 3));
// console.log(a5);

// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "kiwi",
//   "tomato",
//   "grape",
//   "strawberry",
// ];

// //알바벳 a가 포함되면 대문자화 시키고, 아니면 단어의 길이로 바꿔주세요

// const a6 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));

// ////////////////////////////////////////////
// //filter :새롭게 걸러줌
// const b1 = arr.filter((v) => v > 5); //7 , 9만 남음
// const b2 = arr.filter((v, i) => i % 2 == 0); //짝수번째만 남음

// //과일에서 6글자 이상인 애들만 걸러주고, 대문자화 시키기
// const b3 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

// // 과일에서 6글자인 애들만 걸러주고, 모든 요소들이 a 또는 o를 포함하는지 궁금쓰
// const b4 = fruits
//   .filter((v) => v.length == 6)
//   .every((v) => v.includes("a") || v.includes("o"));

// console.log(b4);

// //fruits 배열에서 길이가 6인 모든 과일 이름이 alpha 배열의 문자 중 하나 이상을 포함하고 있는지 여부를 나타내는 boolean 값입니다.
// //과일에서 6글자인 애들만 걸러주고, 모든 요소들이 a 또는 o를 포함하는지 궁금쓰 같은의미
// const alpha = ["a", "o"];
// const b5 = fruits
//   .filter((v) => v.length == 6)
//   .every((v) => alpha.some((x) => v.includes(x)));

// //const c =[] 와 같은 의미
// const c = Array(10); //길이 10인 배열을 만듬
// const c1 = Array(10).fill(0); //각각의 엔덱스 값을 0 으로 채움
// //0~9까지 채워주세요. 인덱스 번호(몇번째)로 인덱스 값 채우기
// const c2 = Array(10)
//   .fill(0)
//   .map((v, i) => i);
// //0~100중에서 홀수만
// const c3 = Array(101)
//   .fill(0)
//   .map((v, i) => i)
//   .filter((v) => v % 2 == 1);

// //str - > array . "americano" -> ['a','m','e','r','i' ---]
// //첫번째 방법:split
// const d = "americano".split("");

// //두번째 방법:Array.from
// const d1 = Array.from("americano");

// //세번째 방법:[...]
// const d2 = [..."americano"];

// //quiz americano 에서 a만 빼서 배열만들어주기
// const d3 = [..."americano"].filter((v) => v != "a");

// //array->str
// //첫번째 방법:join("")
// const e = ["coffee", "cookie"].join("");
// //두번째 방법:toString 근데 출력값 중간에 쉼표가 있어 잘 안씀
// const e1 = ["coffee", "cookie"].toStirng();

//quiz "cccCCC" -> "CCCccc" 함수로
// const change = (word) =>
//   [...word]
//     //대문자 인지 물어봐서 맞으면 소문자로 바꾸고 아니면 그냥 대문자로 냅두기
//     .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
//     .join("");

// console.log(change("cccCCC"));

// // quiz
// // n k result
// // 10 3 [3,6,9]
// // 15 5 [5,10,15]

// const multiple = (n, k) =>
//   Array(n)
//     .fill(0)
//     .map((v, i) => i + 1)
//     .filter((v) => v % k == 0);
// console.log(multiple(12, 4));

//누적 합 구하는 법 reduce()
//arr:누적 수, cur:현재 수. 누적수에다가 현재 수를 계속 더 함.
const a = [1, 2, 3, 4, 5];
a1 = a.reduce((arr, cur) => arr + cur);
console.log(a1);

// //1부터 100까지 더함
// Array(100)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .reduce((arr, cur) => arr + cur);

// //fruits1 배열에서 각각 인덱스값의 자음을 추출하여 결과값 만들기. 끝판왕....
// //결과값: pplbnnrngkwtmt
const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];
//v는 appple => ["a","p","p","l","e"] 로 바꿔줌
const f = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  //누적된 문자열을 계속 합침
  .reduce((acc, cur) => acc + cur);

console.log(f);
