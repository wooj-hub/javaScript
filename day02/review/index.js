// quiz 두 수를 따로 각각 입력 받고, 합, 차 , 곱을
// html에 h2태그로 3개 각각 나타내기. 폰트 색깔은 하늘색

// const a = prompt("첫번째 수 입력");
// const b = prompt("두번째 수 입력");
// const numberA = Number(a);
// const numberB = Number(b);

// const h2tag1 = document.createElement("h2");
// const h2tag2 = document.createElement("h2");
// const h2tag3 = document.createElement("h2");

// h2tag1.innerText = `두 수의 합은 ${numberA + numberB} 입니다.`;
// h2tag2.innerText = `두 수의 차는 ${numberA - numberB} 입니다.`;
// h2tag3.innerText = `두 수의 곱은 ${numberA * numberB} 입니다.`;

// h2tag1.style.color = "skyblue";
// h2tag2.style.color = "skyblue";
// h2tag3.style.color = "skyblue";

// document.body.appendChild(h2tag1);
// document.body.appendChild(h2tag2);
// document.body.appendChild(h2tag3);

//quiz 밑변과 높이를 각각 입력받고, 정삼각형의 넓이를
//html에 div 태그로 나타내기, 폰트사이즈는 20px,
//폰트 색깔은 초록색

//문자형을 숫자형으로 바로 변환
// const a = Number(prompt("밑변 입력"));
// const b = Number(prompt("높이 입력"));

// const divtag = document.createElement("div");

// divtag.style.fontSize = "20px";
// divtag.style.color = "green";
// divtag.innerText = `정삼각형의 넓이는 ${(a * b) / 2} 입니다.`;

// document.body.appendChild(divtag);

//quiz - 0 + 형태로 Counter 만들기

// const button1 = document.createElement("button");
// const button2 = document.createElement("button");
// const button3 = document.createElement("button");

// button1.innerText = "-";
// button2.innerText = "0";
// button3.innerText = "+";

// button1.addEventListener("click", () => {
//   button2.innerText = Number(button2.innerText) - 1;
// });

// button3.addEventListener("click", () => {
//   button2.innerText = Number(button2.innerText) + 1;
// });

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);

//왜 변수로 사용하면 안되지????????????
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const a = 0;

button1.innerText = "-";
button2.innerText = `${a}`;
button3.innerText = "+";

button1.addEventListener("click", () => {
  const b = a - 1;
  // event 에선 $이게 안먹나???
  button2.innerText = `${b}`;
});

button3.addEventListener("click", () => {
  a = a - 1;
});

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
