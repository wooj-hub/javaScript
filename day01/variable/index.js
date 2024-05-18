// 변수(variable) : 데이터를 기억하는 공간, 닉네임
// const 변수이름 = 데이터
// let 변수이름 = 데이터
// var 변수이름 = 데이터 [절대절대 쓰지말기]

// 인간: 연산[뇌] + 기억[뇌]
// 컴퓨터 : 연산[CPU] + 기억[RAM]
// kakao.file[하드디스크]
// RAM[kakao/youtube/game/...] <=> CPU

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 const mintchoco
// 4. 숫자로 시작 안됨 ex) const 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1.의미 있는 단어로 사용
// ex) const a(x), const button(x) white_button
// 2. 두단어 합칠때, 낙타표기법, 뱀표기법사용
// -낙타: milkCoffee
// -뱀: milk_coffee
// 3. 소문자로 시작하기

// const a = 1; // a는 1
// const b= "사이다" // b는 사이다
// a=200; (x)

// let c = 100;
// c = 200; (0)

//quiz 유저에게 내용과 색깔을 두개 각각 각각 입력받고,
//html에 h1~h3태그 각각 3개 만들기.

// const text1 = prompt("h1은 무슨 내용이야?");
// const color1 = prompt("h1의 색깔?");
// const text2 = prompt("h2은 무슨 내용이야?");
// const color2 = prompt("h2의 색깔?");
// const text3 = prompt("h3은 무슨 내용이야?");
// const color3 = prompt("h3의 색깔?");
// const h1tag = window.document.createElement("h1");
// const h2tag = window.document.createElement("h2");
// const h3tag = window.document.createElement("h3");

// h1tag.style.color = color1;
// h1tag.innerText = text1;
// h2tag.style.color = color2;
// h2tag.innerText = text2;
// h3tag.style.color = color3;
// h3tag.innerText = text3;

// document.body.appendChild(h1tag);
// document.body.appendChild(h2tag);
// document.body.appendChild(h3tag);

//quiz 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
//원하는 폰트색깔 만들고,
//html에 만들기
const a = prompt("무슨 태그 만들고싶어?");
const text = prompt("무슨 내용이야?");
const color = prompt("폰트 색깔은 뭐야?");

const tag1 = window.document.createElement(a);

tag1.innerText = text;
tag1.style.color = color;
document.body.appendChild(tag1);
