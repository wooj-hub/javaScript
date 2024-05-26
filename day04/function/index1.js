//화살표 함수[arrow function]

const plus100 = (x) => {
  return x + 100;
};
//위에 함수랑 같은 의미. return이 한줄이면 밑에처럼 요약 가능. 한줄일때만 가능!
const plus100_ = () => x + 100;
console.log(plus100(200));

//2. 원소 3번째거 돌려주기
const getthird = (x) => {
  return x[2];
};
//요약
const getthird_ = (x) => x[2];
console.log(getthird[("1", "2", "3", "4")]);

//3. 소문자화 시키고 😁붙히기
const lower = (x) => {
  return x.toLowerCase() + "😁";
};
//요약
const lower_ = (x) => x.toLowerCase() + "😁";
console.log(lower("ASDFEF"));
