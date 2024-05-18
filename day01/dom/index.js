//js가 html을 만들기(조작하기) 위한 장소. window 생략 가능
// h1 태그 만들기
// const h1tag = window.document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// //body에 추가
// document.body.appendChild(h1tag);

//버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const h2tag = window.document.createElement("button");
// //CSS
// h2tag.style.backgroundColor = "skyblue";
// h2tag.style.padding = "10px";
// h2tag.style.fontSize = "20px";

// h2tag.innerText = "클릭!";
// //body에 추가
// document.body.appendChild(h2tag);

//const a = prompt("점심 뭐먹을거??");
// console.log(a);

//quiz prompt로 배경색깔을 물어보고 헥사코드,
//ex)red, #ffefed(헥사코드)
//div -> width: 100px, height: 100px, background: red

// const a = prompt("배경색깔 뭐로할꺼?");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.background = a;
// document.body.appendChild(box);

// const b = prompt("어떤 내용을 넣을까?");
// box.innerText = b;
// box.style.display = "flex";
// box.style.justifyContent = "center";
// box.style.alignItems = "center";
// box.style.fontSize = "20px";
// document.body.appendChild(b);

//quiz 폰트 색깔 물어보고
//버튼 안에 들어갈 내용 물어보고
//버튼을 html에 보여주기

// const a = prompt("폰트 색깔 뭐로할까?");
// const b = prompt("버튼 안 내용 뭐 넣을까?");
// const button1 = window.document.createElement("button");
// button1.style.color = a;
// button1.style.width = "100px";
// button1.style.height = "100px";
// button1.innerText = b;
// document.body.appendChild(button1);

// quiz 높이 물어보기 주의)100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div 태그로 위의 내용을 고려해서 나타내기

//높이, 넓이 답할때 px꼭 써주기
const a = prompt("높이? ex)100px");
const b = prompt("넓이? ex)100px");
const c = prompt("배경색?");
const d = prompt("무슨 내용 넣을까?");

const box = window.document.createElement("div");
box.style.width = b;
box.style.height = a;
box.style.backgroundColor = c;
box.innerText = d;
//글씨 가운데로
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";

box.style.fontSize = "20px";
document.body.appendChild(box);
