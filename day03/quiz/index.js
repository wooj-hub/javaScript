//quiz
// const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

//사과 버튼
// 오렌지 버튼
// 파인애플 버튼
// ... html 버튼을 만들고
// 각 버튼을 누르면 각 과일이 선택되었습니다. 라는 문구 생성

// fruits.forEach((x) => {
//   const fruits_button = document.createElement("button");
//   fruits_button.innerText = x;

//   //forEach for문처럼 {}코드가 실행되고 다음 {}코드로 실행되는건 아닌듯.
//   fruits_button.addEventListener("click", () => {
//     const fruits_span = document.createElement("span");
//     //\n은 줄바꿈.
//     fruits_span.innerText = `\n${x}가 선택되었습니다.`;
//     document.body.appendChild(fruits_span);
//   });
//   document.body.appendChild(fruits_button);
// });

// quiz
const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];

//각각 커피 버튼을 만들어주시고
//split으로 찢어서 각각 버튼을 누르면 html의 total 가격 올리기

// coffee.forEach((x) => {
//   const coffee_button = document.createElement("button");
//   const total_price = document.querySelector(".total");
//   const coffee_price = Number(x.split(" ")[1]);
//   coffee_button.innerText = x.split(" ")[0];

//   coffee_button.addEventListener("click", () => {
//     total_price.innerText = Number(total_price.innerText) + coffee_price;
//   });
//   document.body.appendChild(coffee_button);
// });

coffee.forEach((v) => {
  const coffee_button = document.createElement("button");
  const coffee_name = v.split(" ")[0];
  const coffee_price = Number(v.split(" ")[1]);
  coffee_button.innerText = coffee_name;
  const coffee_total = document.querySelector(".total");

  coffee_button.addEventListener("click", () => {
    coffee_total.innerText =
      //   Number(coffee_total.innerText) + Number(v.split(" ")[1]); 와 같은 의미임.
      Number(coffee_total.innerText) + coffee_price;
  });
  document.body.appendChild(coffee_button);
});
