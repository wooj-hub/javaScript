// div: w:100 h:100 bg: 알아서
// -,+ 버튼을 눌러서 div가 유동적으로 넓이가 변하도록 하는 프로그램

const divtag = document.createElement("div");
const width_span = document.createElement("span");
const width_button_sub = document.createElement("button");
const width_button_add = document.createElement("button");

const height_span = document.createElement("span");
const height_button_sub = document.createElement("button");
const height_button_add = document.createElement("button");

divtag.style.width = "100px";
divtag.style.height = "100px";
divtag.style.background = "skyblue";

width_span.innerText = "넓이 조정:";
width_button_sub.innerText = "-";
width_button_add.innerText = "+";

height_span.innerText = "높이 조정:";
height_button_sub.innerText = "-";
height_button_add.innerText = "+";

width_button_sub.addEventListener("click", () => {
  //  divtag.style.width =  parseInt(divtag.style.width) - 1 + "px"; 로 해줘도 됨.
  const a = parseInt(divtag.style.width) - 1;
  divtag.style.width = `${a}px`;
});

width_button_add.addEventListener("click", () => {
  const a = parseInt(divtag.style.width) + 1;
  divtag.style.width = `${a}px`;
});

height_button_sub.addEventListener("click", () => {
  const a = parseInt(divtag.style.height) - 1;
  divtag.style.height = `${a}px`;
});

height_button_add.addEventListener("click", () => {
  const a = parseInt(divtag.style.height) + 1;
  divtag.style.height = `${a}px`;
});

document.body.appendChild(divtag);
document.body.appendChild(width_span);
document.body.appendChild(width_button_sub);
document.body.appendChild(width_button_add);
document.body.appendChild(height_span);
document.body.appendChild(height_button_sub);
document.body.appendChild(height_button_add);
