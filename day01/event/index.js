// Event

// const button = document.createElement("button");
// button.innerText = "버튼임";

// //이벤트 발생. addEventListener("이벤트 종류", () => {이벤트 발생 시 로직})
// button.addEventListener("mouseover", () => {
//   console.log("마우스 올라감");
// });

// document.body.appendChild(button);

// quiz div태그- width: 100px, height: 100px, backgroundcolor: red
// event -- 클릭을 하면,  backgroundcolor: blue

// const div1 = document.createElement("div");
// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.backgroundColor = "red";

// div1.addEventListener("click", () => {
//   div1.style.backgroundColor = "blue";
// });

// document.body.appendChild(div1);

//quiz 이벤트 -- 마우스 올라가면 파란색,마우스 내려가면 빨간색
// const div1 = document.createElement("div");
// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.backgroundColor = "red";

// div1.addEventListener("mouseover", () => {
//   div1.style.backgroundColor = "blue";
// });
// div1.addEventListener("mouseout", () => {
//   div1.style.backgroundColor = "red";
// });

// document.body.appendChild(div1);

// quiz button 태그를 만들고, 안에 내용: 파란상자
// event 클릭을 하면, html div. w:100, h:100, bg:blue 생김

// const button1 = document.createElement("button");
// button1.innerText = "파란상자";
// button1.addEventListener("click", () => {
//   const div1 = document.createElement("div");
//   div1.style.width = "100px";
//   div1.style.height = "100px";
//   div1.style.backgroundColor = "blue";
//   div1.style.marginBottom = "10px";
//   document.body.appendChild(div1);
// });

// document.body.appendChild(button1);

//quiz 버튼을 3가지 만들고, 각각 이름은 사이트의 색깔 이름 넣기.
// div: 100px 100px bg: black
// 각각 click 을 하면, 위에 div bg 색깔을 클릭한 이름의 색깔로 변경하기.

// const div1 = document.createElement("div");
// const button1 = document.createElement("button");
// const button2 = document.createElement("button");
// const button3 = document.createElement("button");

// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.backgroundColor = "black";

// button1.innerText = "DESIRE";
// button1.addEventListener("click", () => {
//   div1.style.backgroundColor = "#eb3b5a";
// });

// button2.innerText = "ALGAL FUEL";
// button2.addEventListener("click", () => {
//   div1.style.backgroundColor = "#20bf6b";
// });

// button3.innerText = "BOYZONE";
// button3.addEventListener("click", () => {
//   div1.style.backgroundColor = "#2d98da";
// });

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);
// document.body.appendChild(div1);

// quiz div => w:100 h:100 border:1px solid black bg:white
// button 의 내용: 색깔 추가,
// button의 이벤트 => 클릭시 prompt로 물어봄. 색깔 헥사코드 입력
// 헥사코드를 가진 새로운 버튼이 생김
// 헥사코드 버튼을 누르면  div의 bg가 변경됨.

// const div1 = document.createElement("div");
// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.border = "1px solid black";
// div1.style.backgroundColor = "whihe";
// const button1 = document.createElement("button");
// button1.innerText = "색깔 추가";
// button1.addEventListener("click", () => {
//   const a = prompt("무슨색깔?");
//   const button2 = document.createElement("button");
//   button2.style.background = a;
//   button2.innerText = a;

//   document.body.appendChild(button2);

//   button2.addEventListener("click", () => {
//     div1.style.backgroundColor = a;
//   });
// });

// document.body.appendChild(div1);
// document.body.appendChild(button1);
