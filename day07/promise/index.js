//비동기: 동시에 여러작업을 처리할 수 있도록 해줌

//Array, Object, Element, Date, Promise
//Promise:비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값 나타냄
//Promise에서는 상태가 3가지: 대기중[pending], 성공[Fulfilled], 실패[Rejected]

//const a 성공("탕후루")
// const a = new Promise((success, fail) => {
//   success("탕후루");
// });
// console.log(a);

// //const b 실패("사탕")
// const b = new Promise((success, fail) => {
//   fail("사탕");
// });
// console.log(b);

// //const c 대기중[pending]
// const c = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("김밥");
//   }, 3000);
// });
// console.log(c);

// // promise 타입 c가 성공했으면 결과 값 출력
//v = 김밥
// c.then((v) => {
//   console.log(v);
// });

// const d = new Promise((success, fail) => {
//   setTimeout(() => {
//     success(10);
//   }, 1000);
// });

// d.then((v) => {
//   console.log(v);
//   return v * 10;
// }).then((v) => {
//   //여기 v값은 앞에 return 값 v*10임
//   console.log(v);
// });

//quiz
const e = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});

e.then((v) => {
  v.name = v.name.toUpperCase(); //name을 대문자화 시키고 return 해주기
  return v;
})
  .then((v) => {
    v.price = v.price * 2; //price를 두배를 해서 return 해주기
    return v;
  })
  .then((v) => {
    console.log(v); //콘솔로그 찍기
  });
