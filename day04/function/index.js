//함수: input[str,bool,element,null] -> output[str,bool,element,null]
//일반함수
// function hello(x) {
//   return "{x} 안녕!";
// }

// const a = hello("여누");
// const b = hello("JS");
// console.log(a); //여누 안녕!
// console.log(b); //JS 안녕!

//quiz 1. X를 넣으면 +100 돌려주는 함수
function plus100(x) {
  return x + 100;
}
//quiz 2. X를 넣으면 대문자화 시키고 + '' 돌려주는 함수
function upperEmoji(x) {
  return x.toUpperCase() + "😊";
}

const c = plus100(300); //400
const d = upperEmoji("apple"); //APPLE😊

console.log(c, d);

//quiz 3. 배열 x를 넣으면 두번째 원소를 돌려주기
function getSecond(x) {
  return x[1];
}
//quiz 4. x를 넣으면 +럭키비키잖앙을 붙혀서 돌려주기
function wonyoungThink(x) {
  return x + "럭키비키잖앙";
}

const e = getSecond(["apple", "banana"]);
const f = wonyoungThink("오늘 일요일 수업닌데");

console.log(e);
console.log(f);
