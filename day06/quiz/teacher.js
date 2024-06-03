import { hasSpecial, isValidLength } from "./util.js";
import { MSG } from "./msg.js";
import { COLOR } from "./color.js";

const id = document.querySelector(".id");
const id_info = document.querySelector(".id_info");

//함수들 원래 다른파일에서 export, import
//특수문자를 갖고있는지 확인하는 함수
// const hasSpecial = (value) => [..."!@#$%^&*"].some((v) => value.includes(v));
// //길이가 4<=길이<=10인지를 확인하는 함수
// const isValidLength = (length) => 4 <= length && length <= 10;

// //MSG 출력하는 함수
// const MSG = {
//   ID: {
//     VALID: "아이디가 올바르지 설정 되었습니다.",
//     INVALID: "아이디가 올바르게 설정 되지 않았습니다.",
//   },
//   PW: {
//     VALID: "비밀번호가 올바르지 설정 되었습니다.",
//     INVALID: "비밀번호가 올바르게 설정 되지 않았습니다.",
//   },
//   PWCH: {
//     VALID: "비밀번호가 확인 일치!",
//     INVALID: "비밀번호가 확인 불일치!",
//   },

//   REGISTER: {
//     VALID: "회원 가입 가능!",
//     INVALID: "회원 가입 불가능!",
//   },
// };
// //COLOR 출력하는 함수
// const COLOR = {
//   VALID: "green",
//   INVALID: "red",
// };
//여기까지 export,import 해줘야 함

//회원가입 버튼 생성
const register = document.querySelector(".register");
//회원가입 버튼의 innertext 값을 바꾸기 위해 인덱스 값에 id,pw,pwch 각각의 true, false 값을 저장함.
const validList = [false, false, false];

id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  id_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  id_info.innerText = isValid ? MSG.ID.VALID : MSG.ID.INVALID;

  //회원가입 버튼을 바꿔주기 위해 아이디가 유효하면 validList[0] 값을 true로 바꿈.
  validList[0] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw = document.querySelector(".pw");
const pw_info = document.querySelector(".pw_info");

pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  pw_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pw_info.innerText = isValid ? MSG.PW.VALID : MSG.PW.INVALID;

  //회원가입 버튼을 바꿔주기 위해 비밀번호가 유효하면 validList[1] 값을 true로 바꿔줌.
  validList[1] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pwch = document.querySelector(".pwch");
const pwch_info = document.querySelector(".pwch_info");

pwch.addEventListener("input", (e) => {
  const { value } = e.target;
  const isValid = pw.value === value;
  pwch_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pwch_info.innerText = isValid ? MSG.PWCH.VALID : MSG.PWCH.INVALID;

  //회원가입 버튼을 바꿔주기 위해 pwch가 유효하면 validList[2] 값을 true로 바꿔줌.
  validList[2] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw_eye_button = document.querySelector(".pw_eye_button");
const pwIcon = document.querySelector(".pwIcon");

pw_eye_button.addEventListener("click", () => {
  //버튼 바꾸기
  pwIcon.classList.toggle("fa-eye");
  pwIcon.classList.toggle("fa-eye-slash");
  //pw 의 타입 변환
  pw.type = pw.type === "password" ? "text" : "password";
});

const pwch_eye_button = document.querySelector(".pwch_eye_button");
const pwchIcon = document.querySelector(".pwchIcon");

pw_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle("fa-eye");
  pwchIcon.classList.toggle("fa-eye-slash");
  pwch.type = pwch.type === "password" ? "text" : "password";
});
