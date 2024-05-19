const coffee1 = document.querySelector(".coffee1_sum");
const coffee2 = document.querySelector(".coffee2_sum");
const coffee3 = document.querySelector(".coffee3_sum");
const coffee_sum = document.querySelector(".total_sum");
const reset = document.querySelector(".reset");
coffee1.addEventListener("click", () => {
  coffee1.innerHTML = Number(coffee1.innerHTML) + 1;
  coffee_sum.innerHTML = Number(coffee_sum.innerHTML) + 3000;
});
coffee2.addEventListener("click", () => {
  coffee2.innerHTML = Number(coffee1.innerHTML) + 1;
  coffee_sum.innerHTML = Number(coffee_sum.innerHTML) + 3500;
});
coffee3.addEventListener("click", () => {
  coffee3.innerHTML = Number(coffee1.innerHTML) + 1;
  coffee_sum.innerHTML = Number(coffee_sum.innerHTML) + 4000;
});

reset.addEventListener("click", () => {
  coffee1.innerHTML = 0;
  coffee2.innerHTML = 0;
  coffee3.innerHTML = 0;
  coffee_sum.innerHTML = 0;
});
