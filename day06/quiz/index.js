/* <span>특수 문자[!#$%^&*] 하나 포함하기</span>
<span>글자 수는 4~12글자 사이</span>  */
// teacher 꺼 하면서 html 클래스 명 수정됨.

const id = document.querySelector(".id");
const valid_id = document.querySelector(".valid_id");

id.addEventListener("input", (e) => {
  const length = e.target.value.length;
  const valid_Length = 4 <= length && length <= 12;
  const valid_Word =
    e.target.value.includes("!") ||
    e.target.value.includes("#") ||
    e.target.value.includes("$") ||
    e.target.value.includes("%") ||
    e.target.value.includes("^") ||
    e.target.value.includes("&") ||
    e.target.value.includes("*");

  if (valid_Length && valid_Word) {
    valid_id.innerText = "아이디설정이 올바릅니다.";
  } else {
    valid_id.innerText = "아이디설정이 올바르지 않습니다.";
  }
  //마지막 버튼 innertText 값을 바꾸는 함수 넣어주기
  validateUser();
});

const password = document.querySelector(".password");
const valid_password = document.querySelector(".valid_password");

password.addEventListener("input", (e) => {
  const length = e.target.value.length;
  const valid_Length = 4 <= length && length <= 12;
  const valid_Word =
    e.target.value.includes("!") ||
    e.target.value.includes("#") ||
    e.target.value.includes("$") ||
    e.target.value.includes("%") ||
    e.target.value.includes("^") ||
    e.target.value.includes("&") ||
    e.target.value.includes("*");

  if (valid_Length && valid_Word) {
    valid_password.innerText = "비밀번호설정이 올바릅니다.";
  } else {
    valid_password.innerText = "비밀번호설정이 올바르지 않습니다.";
  }
  validateUser();
});

const passwordCheck = document.querySelector(".passwordCheck");
const valid_passwordCheck = document.querySelector(".valid_passwordCheck");

passwordCheck.addEventListener("input", (e) => {
  //password.value 값으로 확인하기
  const validcheck = e.target.value == password.value;
  if (validcheck) {
    valid_passwordCheck.innerText = "비밀번호 확인 일치!";
  } else {
    valid_passwordCheck.innerText = "비밀번호설정을 다시 확인해주세요";
  }
  validateUser();
});

const user = document.querySelector(".user");

const validateUser = () => {
  if (
    valid_id.innerText === "아이디설정이 올바릅니다." &&
    valid_password.innerText === "비밀번호설정이 올바릅니다." &&
    valid_passwordCheck.innerText === "비밀번호 확인 일치!"
  ) {
    user.innerText = "회원 가입 가능";
  } else {
    user.innerText = "회원 가입 불가능";
  }
};
