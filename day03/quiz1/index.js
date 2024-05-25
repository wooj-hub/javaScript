// const box = document.querySelector(".box");
// const borderRadius_button = document.createElement("button");
// const size_button = document.createElement("button");
// const color_button = document.createElement("button");

// borderRadius_button.innerText = "테두리둥금";
// size_button.innerText = "늘리기";
// color_button.innerText = "빨간색";

// borderRadius_button.addEventListener("click", () => {
//   if (box.classList.contains("borderRadiusZero")) {
//     box.classList.replace("borderRadiusZero", "borderRadiusTen");
//     borderRadius_button.innerText = "테두리 직각";
//   } else {
//     box.classList.replace("borderRadiusTen", "borderRadiusZero");
//     borderRadius_button.innerText = "테두리 둥금";
//   }
// });

// size_button.addEventListener("click",() =>{
//   if(box.classList.contains(""))
// })

// document.body.appendChild(borderRadius_button);
// document.body.appendChild(size_button);
// document.body.appendChild(color_button);

//강사님 코드

const box = document.querySelector(".box");
const colorBtn = document.querySelector(".color");
const sizeBtn = document.querySelector(".size");
const radiusBtn = document.querySelector(".radius");

colorBtn.addEventListener("click", () => {
  colorBtn.innerText = colorBtn.innerText == "파란색" ? "빨간색" : "파란색";
  box.classList.toggle("red");
  box.classList.toggle("blue");
});

sizeBtn.addEventListener("click", () => {
  sizeBtn.innerText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  box.classList.toggle("medium");
  box.classList.toggle("large");
});

radiusBtn.addEventListener("click", () => {
  radiusBtn.innerText = radiusBtn.innerText == "둥글게" ? "직각" : "둥글게";
  box.classList.toggle("borderRadiusZero");
  box.classList.toggle("borderRadiusTen");
});
