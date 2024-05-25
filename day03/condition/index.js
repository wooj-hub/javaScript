// //condition[조건]
// const a = Number(prompt("숫자 입력:"));
// if (a > 0) {
//   alert("a가 0보다 큽니다.");
// } else if (a == 0) {
//   alert("a가 0입니다");
// } else {
//   alert("a가 0보다 작습니다.");
// }

//prompt로 영어 점수를 입력받고
//90점 이상 'a'
//80점 이상 'b'
//70점 이상 'c'
//60점 이상 'd'
//60점 미만 '나락'

// const score = Number(prompt("영어 점수 입력"));
// if (score >= 90) {
//   alert("a");
// } else if (score >= 80) {
//   alert("b");
// } else if (score >= 70) {
//   alert("c");
// } else if (score >= 60) {
//   alert("d");
// } else {
//   alert("나락");
// }

//quiz 유저에게 비밀번호 설정을 물어보고,

const special = ["!", "#", "$"];
//special 값 중 하나라도 만족하면 true. 따라서 아래꺼는 true
special.some((v) => {
  return v == "$";
});
//special 값 모두가 만족해야 true. 따라서 아래꺼는 false
special.every((v) => {
  return v == "!";
});
//special 값 모두가 만족해야 true. 따라서 아래꺼는 true
special.every((v) => {
  return v != "@";
});

//number 값 중 하나라도 만족하면 true. 따라서 아래꺼는 true
const number = [1, 2, 3, 4, 5];
number.some((v) => {
  return v > 4;
});

//1. 비밀번호 길이가 8글자 이상이고 //비밀번호가 짧습니다.
//2. 특수문자 !,#,& 가 하나 들어가야 하고 //특수문자 !#$가 없습니다.
//3. I로 시작하고, T로 끝나야 하고//I와 T를 꼭 시작과 끝에 넣어야 합니다.
//위의 조건을 모두 통과하면 비밀번호 설정완료!

// const pw = prompt("비밀번호를 설정해주세요");

// if (pw.length >= 8) {
//   if (pw.includes("!") || pw.includes("#") || pw.includes("$")) {
//     if (pw[0] == "I" && pw[pw.length - 1] == "T") {
//       alert("비밀번호 설정 완료!");
//     } else {
//       alert("I와 T를 꼭 시작과 끝에 넣어야 합니다.");
//     }
//   } else {
//     alert("특수문자 !,#,$중 하나가 있어야 합니다.");
//   }
// } else {
//   alert("비밀번호가 짧습니다.");
// }

//강사님 코드
// const pw = prompt("비밀번호를 설정해주세요");
// const isLenghtOver8 = pw.length >= 8;

//3개 다 같은 의미
// const hasSpectialChar =
//   pw.includes("!") || pw.includes("#") || pw.includes("$");
// const hasSpectialChar =["!","#","$"].some((v)=>{
//   return pw.includes(v);
// })
// const hasSpectialChar ="!#$".split(" ").some((v)=>{
//   return pw.includes(v);
// })
//3개 다 같은 의미

// const isValidIT = pw.startWith("I") && pw.endsWith("T");

// if (!isLenghtOver8) {
//   alert("비밀번호가 짧아요");
// } else if (!hasSpectialChar) {
//   alert("특수문자 !#$가 포함되어있지 않습니다");
// } else if (!isValidIT) {
//   alert("I와 T를 꼭 시작과 끝에 넣어야 합니다.");
// } else {
//   alert("비밀번호 설정 완료!");
// }
