// const coffeeMenu = [
//   { name: "아메리카노", price: 2500, isRemained: false },
//   { name: "라떼", price: 3500, isRemained: false },
//   { name: "바닐라 라떼", price: 3000, isRemained: true },
// ];

//함수 만들어서 적용하기. 강사님 코드 복사하기
// const stockTag = (isRemained) =>{
//   const className = isRemained? "blue" :"red";
//   const text = inRemained? "있음" : "없음";
//   return ``
// }

// coffeeMenu.forEach((v) => {
//   //insertAdjacentHTML 사용해서 바꾸기
//   const newTag = `
//   <div>
//   <h3>${v.name}</h3>
//   <h5>${v.price}</h5>
//   <span class="${v.isRemained ? "blue" : "red"}">${
//     v.isRemained ? "있음" : "없음"
//   }</span>
//   </div>
//   `;

//   const menu = document.querySelector(".menu");
//   menu.insertAdjacentHTML("beforeend", newTag);

//위에랑 같은의미

// const newDiv = document.createElement("div");
// newDiv.className = "coffee";

// const h3 = document.createElement("h3");
// h3.innerText = v.name;
// const h5 = document.createElement("h5");
// h5.innerText = v.price;
// const span = document.createElement("span");
// span.innerText = `남은 재고 : ${v.isRemained ? "있음" : "없음"}`;

// newDiv.appendChild(h3);
// newDiv.appendChild(h5);
// newDiv.appendChild(span);

// const menu = document.querySelector(".menu");
// menu.appendChild(newDiv);
// });

//quiz
//3000원 이상이면 20% 할인금액 적용
//커피 이름 맨 앞글자만 대문자로

const coffeeMenu = [
  { name: "americano", price: 2500, isRemained: false },
  { name: "latte", price: 3500, isRemained: false },
  { name: "vanilla latte", price: 3000, isRemained: true },
];

const priceTag = (price) => {
  const discountPrice = price >= 3000 ? price * 0.8 : price;
  return `<h5>${discountPrice}</h5>`;
};
const firstupper = (name) => {
  //이름 첫글자를 대문자로 만들어주고 뒤에 글자 합치기
  const firstupper_name = name[0].toUpperCase() + name.slice(1, name.length);
  return `<h3>${firstupper_name}</h3>`;
};

coffeeMenu.forEach((v) => {
  //insertAdjacentHTML 사용해서 바꾸기

  const newTag = `
  <div>
  <h3>${v.name}</h3>
  <h3>${firstupper(v.name)}</h3>
  <h5>${v.price}</h5>
  <h5>${priceTag(v.price)}</h5>
  <span class="${v.isRemained ? "blue" : "red"}">${
    v.isRemained ? "있음" : "없음"
  }</span>
  </div>
  `;

  const menu = document.querySelector(".menu");
  menu.insertAdjacentHTML("beforeend", newTag);
});

// 요약화 한거 강사님꺼 코드 복사하기
