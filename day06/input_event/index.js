// const inputTag = document.querySelector(".inputTag");

//event?
//키보드로 입력하는 값을 console 창에 띄우기 //console.log(e); 로 띄움
//target은 event가 일어난 곳을 가리킴
//e.target.value 은 target에서 치는 값 그대로 나옴.
// inputTag.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

//4~10글자 사이이면 글자수가 충분합니다[초록]
//0~3글자 글자가 짧습니다.[빨강]
//11글자 이상이면 글자가 깁니다[빨강] ㄱ

// const inputTag = document.querySelector(".inputTag");
// const span = document.querySelector(".info");

// inputTag.addEventListener("input", (e) => {
//     //string 타입인 value 의 길이를 가져오기
//   const input_length = e.target.value.length;
//   input_length >= 4 && input_length <= 10
//     ? ((span.innerText = "글자가 충분합니다"), (span.style.color = "green"))
//     : input_length < 4
//     ? ((span.innerText = "글자가 짧습니다."), (span.style.color = "red"))
//     : ((span.innerText = "글자가 깁니다."), (span.style.color = "red"));
// });

//강사님 코드

const inputTag = document.querySelector(".inputTag");
const info = document.querySelector(".info");
inputTag.addEventListener("input", (e) => {
  //string 타입인 value 의 길이를 가져오기. 이렇게 해도됨.
  const { length } = e.target.value;
  const isValidLength = 4 <= length && length <= 10;
  const color = isValidLength ? "green" : "red";
  info.style.color = color;
  if (length < 4) {
    info.innerText = "글자가 짧습니다.";
  } else if (10 < length) {
    info.innerText = "글자가 깁니다.";
  } else {
    info.innerText = "글자가 충분합니다.";
  }
});
