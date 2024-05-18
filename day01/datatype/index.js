// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입: 숫자,문자
// 타입 변환

//  1. 숫자 타입
// const a = 7(숫자);
// const b = 3.14(숫자);
// const c = 12903812903(숫자);

// // 2. 문자 타입
// const d = '아메리카노';
// const e = "바닐라라떼";
// // 키보드 1 옆에 ``
// const f =  `민트초콜렛`;

// //&{} => 변수 취급
// const g= `내 최애 음료는: ${e}`
// console.log(g)

//quiz 프롬프트를 이용해서,
//1. 당신의 mbti?
//2. 당신의 최애 음식?
//alert으로 당신의 mbti는~~, 최애 음식은 ~~이군요.

// const a = prompt("당신의 mbti?");
// const b = prompt("당신의 최애 음식?");

// alert(`당신의 mbti는 ${a}, 최애 음식은 ${b}이군요.`);

//오늘의 날짜는 무엇인가요?
//오늘의 일정은 무엇인가요?
//오늘의 날짜는 ~~이고, ~~을 하실 예정이시군요

// const a = prompt("오늘의 날짜는?");
// const b = prompt("오늘의 일정은?");

// alert(`오늘의 날짜는 ${a}이고, ${b}을 하실 예정이시군요.`);

// 첫번째 수 입력
// 두번째 수 입력
// 두 수의 합은 ~~입니다.

// const a = prompt("첫번째 수 입력?");
// const b = prompt("두번째 수 입력?");
// //문자에서 숫자로 형 변환
// const numberA = Number(a);
// const numberB = Number(b);
// alert(`두 수의 합은 ${numberA + numberB}입니다`);

//quiz 몇살이세요? -> 20
//html에 h1태그로 된 2005년이시군요.
const b = prompt("몇살이세요?");
const numberB = Number(b);

const h2tag = document.createElement("h1");
h2tag.innerText = `${2024 - numberB + 1} 년이시군요.`;

document.body.appendChild(h2tag);

//quiz 정사각형의 한변의 길이 ->10
//html에 정사각형의 넓이는 100입니다.

const a = prompt("정사각형 한변의 길이는?");
const numberA = Number(a);
const h1tag = document.createElement("h1");
h1tag.innerText = `정사각형 넓이는 ${numberA * numberA}입니다`;
document.body.appendChild(h1tag);
