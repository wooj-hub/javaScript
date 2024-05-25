const add_button = document.querySelector(".add");
const counter = document.querySelector(".counter");
const sub_button = document.querySelector(".sub");

add_button.addEventListener("click", () => {
  //counter는 element 혹은 null 타입
  const num = Number(counter.innerText);
  const newNum = num < 10 ? num + 1 : num;
  counter.innerText = newNum;
  counter.style.color = newNum == 10 ? "red " : "black";
});

sub_button.addEventListener("click", () => {
  const num = Number(counter.innerText);
  const newNum = num > -10 ? num - 1 : num;
  counter.innerText = newNum;
  counter.style.color = newNum == -10 ? "red " : "black";
});
