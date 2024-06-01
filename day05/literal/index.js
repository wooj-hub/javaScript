// const friends = ["kim", "lee", "park"];

// const head = document.createElement("h1");
// head.innerText = "My Friend";
// document.body.appendChild(head);

// friends.forEach((v) => {
//   //이걸 밖으로 빼면 하나밖에 안만들어짐.
//   const friends_name = document.createElement("ul");
//   friends_name.innerHTML = `<li>${v}</li>`;
//   document.body.appendChild(friends_name);
// });

//강사님 코드
// const html = `
// <h1>My friend</h1>
// <ul>
//   ${friends.map((v) => `<li>${v}</li>`).join("")}
// </ul>
// `;

// document.body.innerHTML = html;

// 이렇게 하면
// ${friends.map((v) => `<li>${v}</li>`)} 화면에 ,가 출력됨. 문자열로 바꿔줘야 함.

//1.createElemnt -> appendChild
//2.innerHTML
//3.insertAdjacentHTML
const menu = document.querySelector(".menu");

//afterbegin: 첫번째 자식 앞에 넣기
//beforeend: 마지막 자식 뒤에 넣기

const friends = ["kim", "lee", "park"];
const html = `
<h1>My friend</h1>
<ul>
  ${friends.map((v) => `<li>${v}</li>`).join("")}
</ul>
`;
menu.insertAdjacentHTML(
  "beforeend",
  `<div>
<h1>안녕하세요</h1>
<h2>오늘 토요일이네요</h2>
<span>ㄹㅇ ㅋㅋ</span>
</div>`
);

//html 변수에 저장값 출력하기
menu.insertAdjacentHTML("beforeend", html);
