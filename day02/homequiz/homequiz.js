const coffee1 = document.querySelector(".coffee1_sum");
const coffee2 = document.querySelector(".coffee2_sum");
const coffee3 = document.querySelector(".coffee3_sum");
const coffee_sum = document.querySelector(".total_sum");
const reset = document.querySelector(".reset");

//글씨 스타일 변경
const coffee1_span = document.querySelector(".coffee1 > span");
coffee1_span.style.color= "green";
coffee1_span.style.fontSize= "20px";

//버튼 스타일 변경  
coffee1.style.width = "50px";
coffee1.style.height = "50px";
coffee1.style.backgroundColor = "white";

coffee1.addEventListener("click", () => {
  coffee1.innerText = Number(coffee1.innerText) + 1;
  coffee_sum.innerText = Number(coffee_sum.innerText) + 3000;
});
coffee2.addEventListener("click", () => {
  coffee2.innerText = Number(coffee2.innerText) + 1;
  coffee_sum.innerText = Number(coffee_sum.innerText) + 3500;
});
coffee3.addEventListener("click", () => {
  coffee3.innerText = Number(coffee3.innerText) + 1;
  coffee_sum.innerText= Number(coffee_sum.innerText) + 4000;
});

reset.addEventListener("click", () => {
  coffee1.innerText = 0;
  coffee2.innerText = 0;
  coffee3.innerText = 0;
  coffee_sum.innerText = 0;
});
