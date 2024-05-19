//html에 선언된 div box 불러오기. 방법 1
// const a = document.querySelector(".box");
// console.log(a);

//html에 선언된 div box 불러오기. 방법 2(잘 안씀)
// const b = document.getElementsByClassName("box");
// console.log(b);

// a.addEventListener("click", () => {
//   console.log("주말 다감");
// });

// - 0 + html태그로 버튼만들기
// 0이하로는 -안눌림

// const sub = document.querySelector(".button_sub");
// const sum = document.querySelector(".sum");
// const add = document.querySelector(".button_add");

// sum 타입은 element 타입이거나 null 일수도 있어서 innerText가 안됨.
//innerHTML 안배움. 쓰지마. 강사님꺼 코드 복사하기.
// sum.innerHTML = "0";

// sub.addEventListener("click", () => {
//   sum.innerHTML =
//     Number(sum.innerHTML) > 0
//       ? Number(sum.innerHTML) - 1
//       : Number(sum.innerHTML);
// });

// add.addEventListener("click", () => {
//   sum.innerHTML = Number(sum.innerHTML) + 1;
// });

//강사님꺼 코드 복사하기

// const bar = document.querySelector(".bar");
// const xmark = document.querySelector(".xmark");
// // sum 타입은 element 타입이거나 null 일수도 있어서 style 스페이스 띄고 사용.
// xmark.style.
// bar.addEventListener("click", () => {
//  xmark.
// });
//강사님꺼 코드 복사하기
